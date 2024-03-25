export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map (u => {
        //console.log(itemId, objPropName, u[objPropName])
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        } else {
            return u;
        }
    })
}