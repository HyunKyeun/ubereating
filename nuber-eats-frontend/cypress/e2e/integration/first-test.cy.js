describe("Log In", () => {
  const user = cy;
  it("should see login page", () => {
    user.visit("/login").title().should("eq", "Login | Nuber Eats");
  });
  it("can see email / password validation errors", () => {
    user.visit("/login");
    user.findByPlaceholderText(/email/i).type("bademail");
    user.findByPlaceholderText(/email/i).clear();
    user.findByPlaceholderText(/password/i).type("1");
    user.findByRole("alert").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("bad@email.com");
    user
      .findByPlaceholderText(/password/i)
      .type("a")
      .clear();
    user.findByPlaceholderText(/email/i).type("1");
    user.findByRole("alert").should("have.text", "Password is required");
  });
  it("can fill out the form", () => {
    user.visit("/login");
    user.findByPlaceholderText(/email/i).type("dango11371137@gmail.com");
    user.findByPlaceholderText(/password/i).type("12345");
    user
      .findByRole("button")
      .should("not.have.class", "pointer-events-none")
      .click();
    user.window().its("localStorage.nuber-token").should("be.a", "string");
    user.visit("/");
  });
  it("sign up", () => {
    user.visit("/create-account");
  });
});
