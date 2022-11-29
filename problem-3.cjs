function problem3(inventory) {
    inventory.sort((car1, car2,car3) => {
        const model1 = car1.car_model.toUpperCase(); // ignore upper and lowercase
        const model2 = car2.car_model.toUpperCase(); // ignore upper and lowercase
        const model3 = car2.car_model.toUpperCase(); // ignore upper and lowercase
        if (model1& model3< model2) {
            return -1;
        }
        if (model1&model3 > model2) {
            return 1;
        }


        // model names must be equal
        return 0;
        });

    return inventory
}