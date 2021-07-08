
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";


class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
    (this.x = x), (this.y = y), (this.direction = direction);

    if(!Number.isInteger(this.x) || !Number.isInteger(this.y) || 
    !(direction === NORTH || direction === SOUTH || direction === WEST || direction === EAST)) {
        throw new TypeError();
    }
}

left() {
  switch (this.direction) {
    case NORTH:
      this.direction = WEST;
      break;
    case WEST:
      this.direction = SOUTH;
      break;
    case SOUTH:
      this.direction = EAST;
      break;
    case EAST:
      this.direction = NORTH;
      break;
  }
  return this;
}

right() {
  switch (this.direction) {
    case NORTH:
      this.direction = EAST;
      break;
    case WEST:
      this.direction = NORTH;
      break;
    case SOUTH:
      this.direction = WEST;
      break;
    case EAST:
      this.direction = SOUTH;
      break;
  }
  return this;
}

move(n) {
    if (parseInt(n, 10) !== n) {
        throw new TypeError(`Not relevant ${n}"`);
    }
  switch (this.direction) {
    case NORTH:
      this.y += n;
      break;
    case WEST:
      this.x -= n;
      break;
    case SOUTH:
      this.y -= n;
      break;
    case EAST:
      this.x += n;
      break;
  }
  return this;
    
}

getPosition() {
  return {
    x: this.x,
    y: this.y,
  };
}

getDirection() {
  return this.direction;
}
}


export { NORTH, EAST, SOUTH, WEST, Rover };
