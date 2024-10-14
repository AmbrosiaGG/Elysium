import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-full items-center py-16 bg-transparent">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 border rounded-xl shadow-sm bg-card border-accent">
            <div className="p-4 sm:p-7">
              <div className="flex justify-between items-center">
                <h1 className="block text-2xl font-bold font-calsans text-card-forground">
                  Sign in
                </h1>
                <p className="mt-2 text-sm text-neutral-400">
                  <a
                    className="text-blue-600 decoration-2 font-calsans hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="https://ambrosia.gg"
                  >
                    Sign up here
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <Button
                  type="button"
                  variant="secondary"
                  className="transition-all w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
                >
                  <Image
                    src="/images/ambrosia.png"
                    width={35}
                    height={35}
                    alt="A"
                  />
                  Sign in with Ambrosia ID
                </Button>

                <div className="py-3 flex items-center text-xs uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6 text-neutral-500 before:border-neutral-600 after:border-neutral-600">
                  Or
                </div>

                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label className="block text-sm mb-2 text-white">
                        Email address
                      </label>
                      <div className="relative">
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          className="focus:outline-none py-3 px-4 block w-full rounded-lg text-sm transition-all"
                          placeholder="duckydev@ambrosia.gg"
                          required
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <label className="block text-sm mb-2 text-white">
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          className="focus:outline-none py-3 px-4 block w-full rounded-lg text-sm transition-all"
                          placeholder="two1five3eights"
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg focus:outline-none"
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
