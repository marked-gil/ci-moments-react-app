import { rest } from "msw";

const baseURL = "https://dj-rest-framework-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 6,
        username: "Circus",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 6,
        profile_image: "https://res.cloudinary.com/dxw9jcho4/image/upload/v1/media/../default_profile_l102wx"
      })
    )
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];