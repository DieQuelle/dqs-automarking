function(event, ...)
    
    
    
    if aura_env.modifier() and 
    event == "UPDATE_MOUSEOVER_UNIT" and 
    GetRaidTargetIndex("mouseover") == nil and 
    UnitIsEnemy("player", "mouseover") then 
        aura_env.Checker()
        return
    end
    
    if event == "COMBAT_LOG_EVENT_UNFILTERED"  then
        local _, subevent, _, _, _, _, _, _, _, _, destRaidFlags = ...
        local raidFlag = tonumber(destRaidFlags)
        
        if subevent == "UNIT_DIED" and raidFlag > 0 then
            aura_env.ResetMark(1 + math.log10(raidFlag) / math.log10(2))
        end    
        return
    end
    
    if event == "PLAYER_REGEN_ENABLED" or event == "PLAYER_ENTERING_WORLD" then 
        for i=1,8 do
            aura_env.ResetMark(i)
        end
        return
    end
    
    
    
end