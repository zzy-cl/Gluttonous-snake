// @author        zzy
// @description   何时仗尔看南雪，我与梅花两白头
// @Blog          https://yyhome.vercel.app

class Game {
    constructor(select, scoreEle, gameoverbg) {
        this.startbtn = document.querySelector('#start')
        this.gameoverimg = document.querySelector(gameoverbg)
        this.map = document.querySelector(select)
        //计分板
        this.scoreEle = document.querySelector(scoreEle)
        // 食物
        this.food = new Food(select)
        // 蛇
        this.snack = new Snake(select)

        this.timer = null

        this.count = 0

        // this.start()
    }

    // 定义游戏的开始
    start() {
        this.timer = setInterval(() => {
            this.snack.move()
            // 吃到食物时，增长
            if (this.snack.isEat(this.food.x, this.food.y)) {
                this.snack.createHead() // 增加一小节
                this.food.foodPost() // 刷新食物位置
                this.scorechange() //得分增加
            }
            if (this.snack.isDie()) {
                clearInterval(this.timer)
                this.gameover()
            }
        }, 250)
    }

    // 暂停
    stop() {
        clearInterval(this.timer)
    }

    // 重新开始
    restart() {
        window.location.reload()
    }

    // 改变方向
    changerun(type) {
        this.snack.direction = type
    }

    //得分增加
    scorechange() {
        //得分增加
        this.count++
        this.scoreEle.innerText = this.count
    }

    //游戏结束的方法
    gameover() {
        this.gameoverimg.style.display = "block"
        //禁用 掉开始按钮的点击
        this.startbtn.disabled = true

    }
}
