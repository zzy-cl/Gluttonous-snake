// @author        zzy
// @description   何时仗尔看南雪，我与梅花两白头
// @Blog          https://yyhome.vercel.app

class Snake {
    constructor(select) {
        this.map = document.querySelector(select) // 获取地图
        this.direction = 'right' // 蛇运动的方向
        this.snacklist = [] // 蛇的数组
        // this.createHead() //创建一个头
        this.createSnack() // 创建一条蛇
    }

    // 创建蛇头
    createHead() {
        // 查找蛇头
        const head = this.snacklist[0]
        // 定义初始位置
        let snackpost = {x: 0, y: 0}

        if (head) {
            // 如果有蛇头，那么新蛇头会放在旧蛇头的后面一位
            // 新蛇头位置发生改变
            switch (this.direction) {
                case 'left':
                    snackpost.x = head.offsetLeft - 40
                    snackpost.y = head.offsetTop
                    break
                case 'right':
                    snackpost.x = head.offsetLeft + 40
                    snackpost.y = head.offsetTop
                    break
                case 'up':
                    snackpost.x = head.offsetLeft
                    snackpost.y = head.offsetTop - 40
                    break
                case 'down':
                    snackpost.x = head.offsetLeft
                    snackpost.y = head.offsetTop + 40
                    break
                default:
                    break
            }
            head.className = 'body'
        } else {
            console.log("没有蛇头")
        }

        // 创建蛇头
        const snackhead = document.createElement('div')
        snackhead.className = 'head'
        this.snacklist.unshift(snackhead) // 存到蛇的数组里

        snackhead.style.left = snackpost.x + 'px'
        snackhead.style.top = snackpost.y + 'px'

        this.map.appendChild(snackhead)
    }

//    创建蛇
    createSnack() {
        for (let i = 0; i < 3; i++) {
            this.createHead()
        }
    }

    move() {
        const body = this.snacklist.pop()
        // console.log(body)
        body.remove()
        this.createHead()
    }

    isEat(foodX, foodY) {
        const head = this.snacklist[0]
        const headX = head.offsetLeft
        const headY = head.offsetTop
        if (foodX === headX && foodY === headY) {
            return true
        } else {
            return false
        }
    }

    isDie() {
        const head = this.snacklist[0] // 找到蛇头
        const headX = head.offsetLeft // 蛇头横坐标
        const headY = head.offsetTop // 蛇头纵坐标
        console.log(headX, headY)
        console.log(this.map.clientWidth, this.map.clientHeight)
        if (headX < 0 || headY < 0 || headX > this.map.clientWidth - 40 || headY > this.map.clientHeight - 40) {
            return true
        } else {
            return false
        }
    }
}
