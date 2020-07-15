const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "Justen McDonald",
    durability: 100,
    enhancement: 20
}

describe("testing enchancer.js", () => {
    test("repair", () => {
        expect(enhancer.repair(item).durability).toEqual(100)
    })

    test("succeed", () => {
        const newItem = enhancer.succeed(item)
        const defEnhancement = item.enhancement

        if(item.enhancement === 20) {
            expect(newItem.enhancement).toEqual(defEnhancement)
        } else {
            expect(newItem.enhancement).toEqual(defEnhancement + 1)
        }
    })

    test("fail", () => {
        if(item.enhancement < 15) {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 5)
        } else if(item.enhancement >= 15) {
            expect(enhancer.fail(item).durability).toEqual( item.durability - 10)
        } else if(item.enhancement > 16){
            expect(enhancer.fail(item).enhancement).toEqual( item.enhancement - 1)
        }
    })
})