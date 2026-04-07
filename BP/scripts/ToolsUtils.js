export function NumberSuffix(number) {
    let Return = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    const suffixes = ['', 'K', 'M', 'B', 'T','Q','Qi','Sx','Sp','Oc','N','D'];
    const AmountDigits = Return.split(".", suffixes.length)
    if (AmountDigits.length > 2) {
        Return = `${AmountDigits[0]}.${AmountDigits[1]}${suffixes[AmountDigits.length - 1]}`
    }
    return Return
}
//Actors
export function AngleVel(v) {
    let anguloXY = Math.atan2(v.y, v.x) * (180 / Math.PI);
    let anguloXZ = Math.atan2(v.z, Math.sqrt(v.x ** 2 + v.y ** 2)) * (180 / Math.PI);
    anguloXY = (anguloXY + 360) % 360 - 180;
    anguloXZ = (anguloXZ + 360) % 360 - 180;
    return {
        x: anguloXY,
        y: anguloXZ,
    };
}
export function LookAt(point1, point2) {
    let deltaY = point2.y - point1.y;
    let deltaX = point1.x - point2.x;
    let deltaZ = point1.z - point2.z;
    let horizontalDistance = Math.sqrt((point2.x - point1.x) ** 2 + (point2.z - point1.z) ** 2);
    let AngleY = Math.atan2(deltaZ, deltaX);
    let AngleX = Math.atan2(deltaY, horizontalDistance);
    return {
        y: AngleY * (180 / Math.PI),
        x: AngleX * (180 / Math.PI)
    };
}
//Construct
export function createSphere(radius, numPoints) {
    const positions = [];

    for (let i = 0; i < numPoints; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions.push({x, y, z});
    }

    return positions;
}
export function createDome(radius, numPoints, angle) {
    const positions = [];
    let maxInclination = Math.PI / 4
    maxInclination = Math.min(Math.max(maxInclination, 0), Math.PI / 2);
  
    const rotationRadians = (angle * Math.PI) / 180;
  
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * maxInclination);
  
      // Apply rotation to the point
      const rotatedTheta = theta + rotationRadians;
  
      const x = radius * Math.sin(phi) * Math.cos(rotatedTheta);
      const y = radius * Math.sin(phi) * Math.sin(rotatedTheta);
      const z = radius * Math.cos(phi);
  
      positions.push({x, y, z});
    }
  
    return positions;
  }
//Math
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
//Vectors
export function Vector(x=0,y=0,z=0){
    const v1 = {x, y, z}
    const Actions = {
        add: (v2) => {
            let Vec = { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z }
            return Vector(Vec.x,Vec.y,Vec.z)
        },
        mul: (v2) => {
            if(typeof(v2) == "number"){
                return Vector(v1.x * v2, v1.y * v2, v1.z * v2)
            }else if(typeof(v2) == "object"){
                return Vector(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z)
            }
        },
        len: Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z),
        dot: (v2)=>{
            return (v1.x * v2.x + v1.y * v2.y + v1.z * v2.z)
        },
        normalized: ()=>{
            const len = Actions.len
            return { x: v1.x / len, y: v1.y / len, z: v1.z / len }
        },
        direction: (v2)=>{
            const Dif = Vector(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
            return Dif.normalized();
        },
        x,
        y,
        z
    }
    return Actions
}
export function VectorAdd(v1,v2){
    let Vec = { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z }
    return Vec
}
export function VectorMul(v1 = { x: 0, y: 0, z: 0 }, v2 = { x: 0, y: 0, z: 0 }) {
    if (typeof (v2) == "object") {
        return { x: v1.x * v2.x, y: v1.y * v2.y, z: v1.z * v2.z }
    } else if (typeof (v2) == "number") {
        return { x: v1.x * v2, y: v1.y * v2, z: v1.z * v2 }
    }
}
export function VectorDot(v1, v2) {
    return (v1.x * v2.x + v1.y * v2.y + v1.z * v2.z);
}
export function VectorLength(v1) {
    return Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
}
export function NormalizeVector(v1) {
    const length = VectorLength(v1)
    return { x: v1.x / length, y: v1.y / length, z: v1.z / length };
}
export function VectorRotation(v1, v2) {
    let Dif = newVector(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)

    let xzprojection = Math.sqrt(Dif.x * Dif.x + Dif.z * Dif.z)
    let x = Math.atan2(Dif.y, xzprojection) * (180 / Math.PI)
    let y = Math.atan2(Dif.z, Dif.x) * (180 / Math.PI)
    return { x, y }
}
export function VectorDirection(v1, v2) {
    const length = VectorLength(v2)
    const Dif = newVector(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
    return NormalizeVector(Dif);
}
export function newVector(x, y, z) {
    return { x, y, z }
}
