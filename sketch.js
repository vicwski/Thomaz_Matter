const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world
var ball
var ground

function setup() {
  createCanvas(400, 600)

  engine = Engine.create()
  world = engine.world

  var options_ball = {
    restitution: 0.8,
    frictionAir: 0.3,
    isStatic: true
  }

  ball = Bodies.circle(200, 100, 40, options_ball)
  World.add(world, ball)

  rectMode(CENTER)
  ellipseMode(RADIUS)
}

function draw() {
  background(0)

  Engine.run(engine)

  ellipse(ball.position.x, ball.position.y, 40, 40)
}
