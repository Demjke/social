export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => items.map(u => (u[objPropName] === itemId ? { ...u, ...newObjProps } : u))


