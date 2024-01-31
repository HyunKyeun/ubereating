import { ApolloProvider } from "@apollo/client";
import { createMockClient, MockApolloClient } from "mock-apollo-client";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Login, LOGIN_MUTATION } from "../login";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Login />", () => {
  let renderResult: RenderResult;
  let mockedClient: MockApolloClient;

  beforeEach(async () => {
    await waitFor(async () => {
      mockedClient = createMockClient();
      renderResult = render(
        <HelmetProvider>
          <Router>
            <ApolloProvider client={mockedClient}>
              <Login />
            </ApolloProvider>
          </Router>
        </HelmetProvider>
      );
    });
  });
  it("should render OK", async () => {
    await waitFor(() => {
      expect(document.title).toBe("Login | Nuber Eats");
    });
  });
  // it("displays email validation errors", async () => {
  //   const { getByPlaceholderText, getByRole } = renderResult;
  //   const email = screen.getByPlaceholderText(/email/i);
  //   userEvent.type(email, "this@wont");
  //   await waitFor(() => {
  //     let errorMessage = screen.getByRole("alert");
  //     expect(errorMessage).toHaveTextContent(/please enter a valid email/i);
  //   });

  //   await waitFor(() => {
  //     userEvent.clear(email);
  //   });

  //   errorMessage = getByRole("alert");
  //   expect(errorMessage).toHaveTextContent(/email is required/i);
  // });
  // it("display password required errors", async () => {
  //   const email = screen.getByPlaceholderText(/email/i);
  //   const submitBtn = screen.getByRole("button");
  //   userEvent.type(email, "this@wont.com");
  //   userEvent.click(submitBtn);
  //   const errorMessage = screen.getByRole("alert");
  //   expect(errorMessage).toHaveTextContent(/password is required/i);
  // });
  // it("submits form and calls mutation", async () => {
  //   const email = screen.getByPlaceholderText(/email/i);
  //   const password = screen.getByPlaceholderText(/password/i);
  //   const submitBtn = screen.getByRole("button");
  //   const formData = {
  //     email: "real@test.com",
  //     password: "123",
  //   };
  //   const mockedMutationResponse = jest.fn().mockResolvedValue({
  //     data: {
  //       login: {
  //         ok: true,
  //         token: "XXX",
  //         error: null,
  //       },
  //     },
  //   });
  //   mockedClient.setRequestHandler(LOGIN_MUTATION, mockedMutationResponse);
  //   userEvent.type(email, formData.email);
  //   userEvent.type(password, formData.password);
  //   userEvent.click(submitBtn);
  //   // expect(mockedMutationResponse).toHaveBeenCalledTimes(1);
  //   // expect(mockedMutationResponse).toHaveBeenCalledWith({
  //   //   loginInput: {
  //   //     email: formData.email,
  //   //     password: formData.password,
  //   //   },
  //   // });
  // });
});
