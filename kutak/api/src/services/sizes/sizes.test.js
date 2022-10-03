import { sizes, size, createSize, updateSize, deleteSize } from './sizes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sizes', () => {
  scenario('returns all sizes', async (scenario) => {
    const result = await sizes()

    expect(result.length).toEqual(Object.keys(scenario.size).length)
  })

  scenario('returns a single size', async (scenario) => {
    const result = await size({ id: scenario.size.one.id })

    expect(result).toEqual(scenario.size.one)
  })

  scenario('creates a size', async () => {
    const result = await createSize({
      input: { velicina: 5714169 },
    })

    expect(result.velicina).toEqual(5714169)
  })

  scenario('updates a size', async (scenario) => {
    const original = await size({ id: scenario.size.one.id })
    const result = await updateSize({
      id: original.id,
      input: { velicina: 7075386 },
    })

    expect(result.velicina).toEqual(7075386)
  })

  scenario('deletes a size', async (scenario) => {
    const original = await deleteSize({ id: scenario.size.one.id })
    const result = await size({ id: original.id })

    expect(result).toEqual(null)
  })
})
