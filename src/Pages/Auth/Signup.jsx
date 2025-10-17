import React from "react";
import { Form, Input, Button, Checkbox, Radio } from "antd";

export default function Signup() {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <img
            src="/images/login.png"
            alt="Login"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center align-middle min-h-screen">
            <div className="flex flex-col items-start w-[50%]">
              <div className="flex justify-center">
                <img src="/images/anant.png" alt="Logo" />
              </div>

              <div className="flex flex-col mb-6">
                <h2 className="text-2xl font-semibold">Create an account</h2>
                <p className="text-sm text-gray-600">
                  Join our poll platform and start creating
                </p>
              </div>

              <div className="w-full mb-0">
                <Form name="register" layout="vertical" className="w-full">
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your full name" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        min: 6,
                        message: "Please enter a password (min 6 chars)",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                  >
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error(
                                  "You must accept the Terms of Service and Privacy Policy"
                                )
                              ),
                      },
                    ]}
                  >
                    <Checkbox className="accent-fe6963">
                      I agree to the&nbsp;
                      <a
                        href="#"
                        style={{ color: "#FE6963" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Terms of Service
                      </a>
                      &nbsp;and&nbsp;
                      <a
                        href="#"
                        style={{ color: "#FE6963" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Privacy Policy
                      </a>
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      htmlType="submit"
                      style={{
                        backgroundColor: "#FE6963",
                        color: "#fff",
                        border: "none",
                      }}
                      className="w-full hover:!bg-[#e85b55]"
                    >
                      Sign in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Already have an account?&nbsp;
              <a
                href="/login"
                style={{ color: "#FE6963" }}
                className="hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
