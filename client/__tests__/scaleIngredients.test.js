import { scaleIngredient } from '../utils/scaleIngredient'

test('scales amount for ingredients with no unit', ()=> {
    expect(scaleIngredient({amount: {value: 1}, unit: {}}, 2)).toBe({amount:{value: 2}, unit: {}})
})