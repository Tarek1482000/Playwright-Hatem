import { test } from '@playwright/test'

test.describe("Login", () => {
    test.beforeAll(() => {
        console.log('Start execute the coming test case')
    })

    test("Should have the correct title", async () => {
        console.log("I am inside test case 1")
    })

    test("Should have the correct URL", async () => {
        console.log("I am inside test case 2")
    })

})
