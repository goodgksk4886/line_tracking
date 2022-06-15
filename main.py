def on_forever():
    if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 60)
    else:
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 160)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 30)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 30)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 160)
basic.forever(on_forever)
