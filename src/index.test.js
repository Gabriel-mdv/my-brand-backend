const names = ["Gabril", "Gentille", "Kagabo", "Edwin"]
const axios = require("axios")
const api = "http://127.0.0.1:4000/api/v1/"


test("Find Names", () => {
          expect(names).toContain("Kagabo");
      })

test("Get blogs", async () => {
const res = await axios.get(`${api}/blogs`);
expect(res.status).toBe(200);


});











// const axios = require("axios")
// const api = "http://127.0.0.1:4000/api/v1/"



// describe("Testing CRUD for blogs", () => {
//     test("Get blogs", async () => {
//         const res = await axios.get(`${api}/blogs`);
//         expect(res.status).toBe(302);
//     });
//     // test("Create Blog", async () => {
//     //     const res = await axios.post(`${api}/blogs`, {
//     //         title: "New Generation of incredible Changes",
//     //         description: "The importance of making decisions on the fly and discuss the benefits of being able to think quickly..",
//     //         content: "We'll discuss the ways in which quick thinking can help us in high-pressure situations, such as emergencies, job interviews, and public speaking. We'll also explore how it can improve our problem-solving abilities.",
//     //         image_url: "https://via.placeholder.com/500",
//     //         category: "TECHNOLOGY AND ENVIRORMNENT"
//     //     });
//     //     expect(res.status).toBe(200)
//     // })
// })