local enemies = {}
local marks = {}
for i=1,8 do table.insert(marks,false) end

aura_env.ResetMark = function(mark) marks[mark] = false end

local function RstMark(mark)
    if aura_env then
        if aura_env.ResetMark then
            aura_env.ResetMark(mark)
        else
            marks[mark] = false
        end
    end 
end

local function SetModifier()
    
    local mod = tonumber(aura_env.config.ddModifer) or 2
    local enable = aura_env.config.optModifier or false
    if enable then
        if mod == 1 then
            aura_env.modifier = function() SetModifier() return IsAltKeyDown() end
        elseif mod == 2 then
            aura_env.modifier = function() SetModifier() return IsControlKeyDown() end
        elseif mod == 3 then
            aura_env.modifier = function() SetModifier() return IsShiftKeyDown() end
        end
    else
        aura_env.modifier = function() SetModifier() return true end
    end
    
end

aura_env.modifier = function() return true end


local ResetBtn=CreateFrame("Button","CAM",nil,"SecureActionButtonTemplate")
ResetBtn:RegisterForClicks("AnyUp")
ResetBtn:SetAttribute("type","macro")
ResetBtn:HookScript('OnClick', function()
        for i=1,8 do RstMark(i) end
end)

local function SetEnemies(tbl)
    for k,v in pairs(tbl) do 
        if k:match("^target-") and v then
            local _, npc_id = string.match(k or "","(.*)-(.*)")
            
            --Error Catch CSV target-
            if not tonumber(npc_id) then 
                print("Invalid NPC ID: " .. k)
            else
                enemies[tonumber(npc_id)] = {
                    ["default"] = {}
                }
            end
        end
    end
end

local function SetMarks(tbl)
    for k,v in pairs(tbl) do 
        if k:match("^p%d+-") and tonumber(v or 9) < 9 then
            local d, npc_id = string.match(k or "","(%d*)-(.*)")
            local found = enemies[tonumber(npc_id)]
            
            if found then
                if not enemies[tonumber(npc_id)]["default"] then
                    enemies[tonumber(npc_id)]["default"] = {}
                end
                if not d then print(k) end
                enemies[tonumber(npc_id)]["default"][tonumber(d)] = v
                
            end
        end
    end
end

local function MaintainOptions()
    SetModifier()
    local _, instanceType, _, _, maxPlayers = GetInstanceInfo()
    
    if aura_env then
        enemies = {}
        
        -- Options Start Here
        SetEnemies(aura_env.config.optICC)
        SetMarks(aura_env.config.optICC)
        -- Options End Here
        
    end
end

MaintainOptions()

local function GetRaidMarker(npcid, spawnid, guid) 
    local npc_idxs = enemies[npcid]["default"]
    local idx_max = math.max(1,#npc_idxs)
    local unlock = (not aura_env.config.optLockAfterUse) or false
    
    local function UnlockMarks()
        for i=1,idx_max do
            local mark_idx = npc_idxs[i]
            marks[mark_idx] = false
        end
    end
    
    
    if npc_idxs then
        for i=1,idx_max do
            local mark_idx = npc_idxs[i]
            
            if unlock and i == idx_max then
                UnlockMarks()
            end
            
            if marks[mark_idx] == false then
                marks[mark_idx] = guid
                return mark_idx
            end
            
        end
    end
    
    return false
end

local timestamp = GetTime()

aura_env.Checker = function()
    local canMark = GetTime() > timestamp + 0.3
    if canMark then
        timestamp = GetTime()
        if UnitIsGroupAssistant("player") or UnitIsGroupLeader("player") or (not IsInRaid()) then
            MaintainOptions()
            local guid = UnitGUID("mouseover")
            local _, _, _, _, _, npc_id, spawn_uid = string.match(guid or "", "(%a+)-(%d+)-(%d+)-(%d+)-(%d+)-(%d+)-(.*)")
            if enemies[tonumber(npc_id)] then
                local markid = GetRaidMarker(tonumber(npc_id), spawn_uid, guid)
                if markid then
                    SetRaidTarget("mouseover", markid)
                end
            end
        end
    end
end