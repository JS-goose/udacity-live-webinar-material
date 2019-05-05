//* Closures
function grandPa() {
    const me = 'Jonathan';

    return function son() {
        const verb = 'enjoys';

        return function grandSon() {
            return function greatGrandSon() {
                const hobby = 'kayaking';
                console.log(`${me} ${verb} ${hobby}`)
            }
        }
    }
}

const call = grandPa();

call()()();