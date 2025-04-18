let yamen1=[5,4,3,2,1,0]
yamen1=[...yamen1, ...yamen1]
yamen1.sort(() => Math.random() - 0.5)
console.log(yamen1)