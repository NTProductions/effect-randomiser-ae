// effect randomiser

function randomiseEffect(effect) {
    // 12 == noValue
    // 13 = ThreeDSpatial
    // 14 == ThreeD
    // 15 == twoDSpatial
    // 16 == twoD
    // 17 == oneD
    // 18 == colour
    // > 19 = custom value/other
    var num, temp;
    for(var i = 1; i <= effect.numProperties; i++) {
        if(effect.property(i).propertyValueType) {
        num = effect.property(i).propertyValueType.toString();
        num = num.slice(2, num.length);
        switch(num) {
            case "13":
                effect.property(i).setValue([Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue)]);
            break;
            case "14":
                effect.property(i).setValue([Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue)]);
            break;
            case "15":
                effect.property(i).setValue([Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue)]);
             break;
             case "16":
                effect.property(i).setValue([Math.floor(Math.random() * effect.property(i).maxValue), Math.floor(Math.random() * effect.property(i).maxValue)]);
             break;
             case "17":
                temp = Math.floor(Math.random() * effect.property(i).maxValue);
                if(temp == 0) {
                        temp = 1;
                    }
                effect.property(i).setValue(temp);
             break;
             case "18":
                effect.property(i).setValue([Math.random(), Math.random(), Math.random()]);
             break;
            }
        }
        }
    }

var comp = app.project.activeItem;
var layer = comp.layer(1);
randomiseEffect(layer.effect(1));