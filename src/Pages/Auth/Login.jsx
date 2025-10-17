import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

export default function Login() {
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
              <div className="mb-7 flex justify-center">
                <img src="/images/anant.png" alt="Logo" />
              </div>

              <div className="flex flex-col mb-6">
                <h2 className="text-2xl font-semibold">Create an account</h2>
                <p className="text-sm text-gray-600">
                  Join our poll platform and start creating
                </p>
              </div>

              <div className="w-full">
                <Form
                  // form={form}
                  name="login"
                  layout="vertical"
                  // onFinish={onFinish}
                  className="w-full"
                >
                  {/* role is auto-detected from email; no manual select */}
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
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
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
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className=" text-sm text-gray-600">
              Already have an account?&nbsp;
              <a
                href="/auth/signup"
                style={{ color: "#FE6963" }}
                className="hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
