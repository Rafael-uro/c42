class Chuva {
    constructor(x, y) {
        var options = {
            'restitution':0.1
        }
        this.rain = Bodies.circle(x, y, 5, options)
        this.x = x
        this.y = y
        World.add(world, this.rain)


    }
    
    update() {
    
    if(this.rain.position.y > height) {
    Matter.Body.setPosition(this.rain, {x: random (0,400), y: random (0,400)})
    }
}
    display() 
	{	
		push()
	ellipseMode(CENTER)
    fill("blue")
		
	
		ellipse(this.rain.position.x,this.rain.position.y,5,5)
		pop()
	}
}
