
export const updateObjectInArray = (items: Array<any>, objProp: any, actionProp: any, newObjProp: any, newObjPropValue: any) => {
    return items.map(u => u[objProp] === actionProp ? {...u, newObjProp: newObjPropValue} : u)
}