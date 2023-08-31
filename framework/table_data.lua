{
    "d": {
      "actions": {
        "finish": [],
        "init": {
          "custom": "local enemies = {}\nlocal marks = {}\nfor i=1,8 do table.insert(marks,false) end\n\naura_env.ResetMark = function(mark) marks[mark] = false end\n\nlocal function RstMark(mark)\n    if aura_env then\n        if aura_env.ResetMark then\n            aura_env.ResetMark(mark)\n        else\n            marks[mark] = false\n        end\n    end \nend\n\nlocal function SetModifier()\n    \n    local mod = tonumber(aura_env.config.ddModifer) or 2\n    local enable = aura_env.config.optModifier or false\n    if enable then\n        if mod == 1 then\n            aura_env.modifier = function() SetModifier() return IsAltKeyDown() end\n        elseif mod == 2 then\n            aura_env.modifier = function() SetModifier() return IsControlKeyDown() end\n        elseif mod == 3 then\n            aura_env.modifier = function() SetModifier() return IsShiftKeyDown() end\n        end\n    else\n        aura_env.modifier = function() SetModifier() return true end\n    end\n    \nend\n\naura_env.modifier = function() return true end\n\n\nlocal ResetBtn=CreateFrame(\"Button\",\"CAM\",nil,\"SecureActionButtonTemplate\")\nResetBtn:RegisterForClicks(\"AnyUp\")\nResetBtn:SetAttribute(\"type\",\"macro\")\nResetBtn:HookScript('OnClick', function()\n        for i=1,8 do RstMark(i) end\nend)\n\nlocal function SetEnemies(tbl)\n    for k,v in pairs(tbl) do \n        if k:match(\"^target-\") and v then\n            local _, npc_id = string.match(k or \"\",\"(.*)-(.*)\")\n            \n            --Error Catch CSV target-\n            if not tonumber(npc_id) then \n                print(\"Invalid NPC ID: \" .. k)\n            else\n                enemies[tonumber(npc_id)] = {\n                    [\"default\"] = {}\n                }\n            end\n        end\n    end\nend\n\nlocal function SetMarks(tbl)\n    for k,v in pairs(tbl) do \n        if k:match(\"^p%d+-\") and tonumber(v or 9) < 9 then\n            local d, npc_id = string.match(k or \"\",\"(%d*)-(.*)\")\n            local found = enemies[tonumber(npc_id)]\n            \n            if found then\n                if not enemies[tonumber(npc_id)][\"default\"] then\n                    enemies[tonumber(npc_id)][\"default\"] = {}\n                end\n                if not d then print(k) end\n                enemies[tonumber(npc_id)][\"default\"][tonumber(d)] = v\n                \n            end\n        end\n    end\nend\n\nlocal function MaintainOptions()\n    SetModifier()\n    local _, instanceType, _, _, maxPlayers = GetInstanceInfo()\n    \n    if aura_env then\n        enemies = {}\n        \n        -- Options Start Here\n        SetEnemies(aura_env.config.optFramework)\n        SetMarks(aura_env.config.optFramework)\n        -- Options End Here\n        \n    end\nend\n\nMaintainOptions()\n\nlocal function GetRaidMarker(npcid, spawnid, guid) \n    local npc_idxs = enemies[npcid][\"default\"]\n    local idx_max = math.max(1,#npc_idxs)\n    local unlock = (not aura_env.config.optLockAfterUse) or false\n    \n    local function UnlockMarks()\n        for i=1,idx_max do\n            local mark_idx = npc_idxs[i]\n            marks[mark_idx] = false\n        end\n    end\n    \n    \n    if npc_idxs then\n        for i=1,idx_max do\n            local mark_idx = npc_idxs[i]\n            \n            if unlock and i == idx_max then\n                UnlockMarks()\n            end\n            \n            if marks[mark_idx] == false then\n                marks[mark_idx] = guid\n                return mark_idx\n            end\n            \n        end\n    end\n    \n    return false\nend\n\nlocal timestamp = GetTime()\n\naura_env.Checker = function()\n    local canMark = GetTime() > timestamp + 0.3\n    if canMark then\n        timestamp = GetTime()\n        if UnitIsGroupAssistant(\"player\") or UnitIsGroupLeader(\"player\") or (not IsInRaid()) then\n            MaintainOptions()\n            local guid = UnitGUID(\"mouseover\")\n            local _, _, _, _, _, npc_id, spawn_uid = string.match(guid or \"\", \"(%a+)-(%d+)-(%d+)-(%d+)-(%d+)-(%d+)-(.*)\")\n            if enemies[tonumber(npc_id)] then\n                local markid = GetRaidMarker(tonumber(npc_id), spawn_uid, guid)\n                if markid then\n                    SetRaidTarget(\"mouseover\", markid)\n                end\n            end\n        end\n    end\nend",
          "do_custom": true
        },
        "start": []
      },
      "anchorFrameType": "SCREEN",
      "anchorPoint": "CENTER",
      "animation": {
        "finish": {
          "duration_type": "seconds",
          "easeStrength": 3,
          "easeType": "none",
          "type": "none"
        },
        "main": {
          "duration_type": "seconds",
          "easeStrength": 3,
          "easeType": "none",
          "type": "none"
        },
        "start": {
          "duration_type": "seconds",
          "easeStrength": 3,
          "easeType": "none",
          "type": "none"
        }
      },
      "authorOptions": [],
      "automaticWidth": "Auto",
      "color": [
        1,
        1,
        1,
        1
      ],
      "conditions": [],
      "config": [],
      "customTextUpdate": "event",
      "displayText": "",
      "displayText_format_p_format": "timed",
      "displayText_format_p_time_dynamic_threshold": 60,
      "displayText_format_p_time_format": 0,
      "displayText_format_p_time_legacy_floor": false,
      "displayText_format_p_time_mod_rate": true,
      "displayText_format_p_time_precision": 1,
      "fixedWidth": 200,
      "font": "Friz Quadrata TT",
      "fontSize": 12,
      "frameStrata": 1,
      "id": "DQS Auto Marking Framework v1",
      "information": [],
      "internalVersion": 66,
      "justify": "LEFT",
      "load": {
        "class": {
          "multi": []
        },
        "size": {
          "multi": []
        },
        "spec": {
          "multi": []
        },
        "talent": {
          "multi": []
        }
      },
      "outline": "OUTLINE",
      "regionType": "text",
      "selfPoint": "BOTTOM",
      "semver": "1.0.2",
      "shadowColor": [
        0,
        0,
        0,
        1
      ],
      "shadowXOffset": 1,
      "shadowYOffset": -1,
      "subRegions": [
        {
          "type": "subbackground"
        }
      ],
      "tocversion": 30402,
      "triggers": {
        "1": {
          "trigger": {
            "custom": "function(event, ...)\n    \n    \n    \n    if aura_env.modifier() and \n    event == \"UPDATE_MOUSEOVER_UNIT\" and \n    GetRaidTargetIndex(\"mouseover\") == nil and \n    UnitIsEnemy(\"player\", \"mouseover\") then \n        aura_env.Checker()\n        return\n    end\n    \n    if event == \"COMBAT_LOG_EVENT_UNFILTERED\"  then\n        local _, subevent, _, _, _, _, _, _, _, _, destRaidFlags = ...\n        local raidFlag = tonumber(destRaidFlags)\n        \n        if subevent == \"UNIT_DIED\" and raidFlag > 0 then\n            aura_env.ResetMark(1 + math.log10(raidFlag) / math.log10(2))\n        end    \n        return\n    end\n    \n    if event == \"PLAYER_REGEN_ENABLED\" or event == \"PLAYER_ENTERING_WORLD\" then \n        for i=1,8 do\n            aura_env.ResetMark(i)\n        end\n        return\n    end\n    \n    \n    \nend",
            "custom_hide": "timed",
            "custom_type": "event",
            "debuffType": "HELPFUL",
            "dynamicDuration": false,
            "event": "Chat Message",
            "events": "UPDATE_MOUSEOVER_UNIT CLEU:UNIT_DIED PLAYER_REGEN_ENABLED PLAYER_ENTERING_WORLD",
            "names": [],
            "spellIds": [],
            "subeventPrefix": "SPELL",
            "subeventSuffix": "_CAST_START",
            "type": "custom",
            "unevent": "timed",
            "unit": "player",
            "use_alwaystrue": true,
            "use_unit": true
          },
          "untrigger": []
        },
        "activeTriggerMode": -10
      },
      "uid": "bIbcUQa8X(f",
      "url": "https://wago.io/hBttee1ip/3",
      "version": 3,
      "wagoID": "hBttee1ip",
      "wordWrap": "WordWrap",
      "xOffset": 0,
      "yOffset": 0
    },
    "m": "d",
    "s": "5.7.0",
    "v": 1421,
    "wagoID": "hBttee1ip"
  }