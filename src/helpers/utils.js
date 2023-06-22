const getFlexAlignment = properties => {

    const { center, centerLeft, centerRight, topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight } = properties;

    const DEFAULT = {
        alignItems: 'center',
        justifyContent: 'center'
    };

    if(center){
        return {
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
    if(centerLeft){
        return {
            alignItems: 'start',
            justifyContent: 'center'
        }
    }
    if(centerRight){
        return {
            alignItems: 'end',
            justifyContent: 'center'
        }
    }
    if(topLeft){
        return {
            alignItems: 'start',
            justifyContent: 'start'
        }
    }
    if(topCenter){
        return {
            alignItems: 'center',
            justifyContent: 'start'
        }
    }
    if(topRight){
        return {
            alignItems: 'end',
            justifyContent: 'start'
        }
    }
    if(bottomLeft){
        return {
            alignItems: 'start',
            justifyContent: 'end'
        }
    }
    if(bottomCenter){
        return {
            alignItems: 'center',
            justifyContent: 'end'
        }
    }
    if(bottomRight){
        return {
            alignItems: 'end',
            justifyContent: 'end'
        }
    }

    return DEFAULT;
    
}

export {
    getFlexAlignment
}