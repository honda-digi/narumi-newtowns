export const ROUTE=[[0,22],[0,-18],[26,-34],[56,-29],[68,-5],[57,28],[53,53],[22,75],[-17,77],[-42,53],[-47,19],[-36,-15],[0,-18]];
export function height(x,z){return 1.8+Math.max(0,z+35)*.095+Math.sin(x*.028)*Math.min(1,Math.max(0,(z+45)/60))*1.25;}
export function nearestRoad(x,z){let best={d:Infinity,x:0,z:0};for(let i=1;i<ROUTE.length;i++){const a=ROUTE[i-1],b=ROUTE[i],dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz))),px=a[0]+t*dx,pz=a[1]+t*dz,d=Math.hypot(x-px,z-pz);if(d<best.d)best={d,x:px,z:pz};}return best;}
export function canWalk(x,z){return nearestRoad(x,z).d<4.6||Math.hypot(x-61,z-40)<12;}
export function constrainDog(x,z){const p=nearestRoad(x,z);if(canWalk(x,z))return{x,z};const k=3.8/p.d;return{x:p.x+(x-p.x)*k,z:p.z+(z-p.z)*k};}
