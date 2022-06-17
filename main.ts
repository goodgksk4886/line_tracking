basic.forever(function () {
    basic.showIcon(IconNames.Sword)
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
        }
    }
})
