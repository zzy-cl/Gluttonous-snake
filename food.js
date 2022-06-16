// @author        zzy
// @description   何时仗尔看南雪，我与梅花两白头
// @Blog          https://yyhome.vercel.app

//定义 Food 类
class Food {
    constructor(select) {
        // 获取地图
        this.map = document.querySelector(select)
        // 创建食物 food
        this.food = document.createElement('div')
        this.food.className = 'food'
        this.map.appendChild(this.food)

        this.x = 0
        this.y = 0
        this.foodPost()
    }

    foodPost() {
        const w_number = this.map.clientWidth / 40
        const h_number = this.map.clientHeight / 40

        // 获取随机数
        let n1 = Math.floor(Math.random() * w_number)
        let n2 = Math.floor(Math.random() * h_number)
        // console.log(n1, n2)

        this.x = n1 * 40
        this.y = n2 * 40

        // 定位
        this.food.style.left = this.x + 'px'
        this.food.style.top = this.y + 'px'
    }
}


