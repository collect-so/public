import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useContext, useState } from "react";
import { ModalContext } from "~/components/Layout";
import { Button, OutlineButton } from "~/components/button";
import { Logo } from "~/components/logo";
import { sendForm } from "../../lib/api";
import { Loader2 } from "lucide-react";

export function Modal() {
  const { close, isOpen } = useContext(ModalContext);
  const [form, updateForm] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const callAPI = async () => {
    setSubmitting(true);
    try {
      const data = await sendForm(form);
      setSubmitted(data.success);
    } catch (err) {
      setError(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError(false);
    setSubmitting(false);
    updateForm({
      name: "",
      email: "",
    });
  };

  const onClose = () => {
    close();
    setTimeout(resetForm, 500);
  };

  const onFormChange = (e: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    updateForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callAPI();
  };
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-4 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all ">
                <form onSubmit={submit}>
                  <div className="bg-background-light px-4 py-4 max-w-[600px]">
                    <div className="flex">
                      <div className="text-left">
                        <Dialog.Title className="text-xl font-semibold leading-6 text-content-primary-light">
                          <Logo className="mb-4" />
                          Join Waitlist
                        </Dialog.Title>
                        {!submitted ? (
                          <>
                            <p className="text-sm text-content-secondary-light py-4">
                              Join our waitlist today and be the first to know
                              when our product becomes available!
                            </p>

                            <div className="grid gap-4 mb-4 md:grid-rows-2">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block mb-2 text-sm font-medium text-content-secondary-light "
                                >
                                  Name (optional)
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="bg-background-light border border-content-primary-light text-content-secondary-light text-sm rounded-md focus:border-accent-blue block w-full p-2.5"
                                  placeholder="John Connor"
                                  value={form.name}
                                  onChange={onFormChange}
                                  disabled={submitting}
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-medium text-content-secondary-light"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="bg-background-light  border border-content-primary-light text-content-secondary-light text-sm rounded-md focus:border-accent-blue block w-full p-2.5"
                                  placeholder="skynet@example.com"
                                  value={form.email}
                                  onChange={onFormChange}
                                  required
                                  disabled={submitting}
                                />
                              </div>
                            </div>
                            <p className="text-sm text-content-secondary-light py-4">
                              We value your privacy. Information you provide
                              will only be used for the purpose of notifying you
                              about updates regarding our product launch. We
                              guarantee that your information will not be used
                              for advertising or spam.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-content-secondary-light py-4">
                              Thank you for joining our waitlist! We appreciate
                              your interest and look forward to keeping you
                              updated on the latest developments. Your support
                              means a lot to us.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    {error ? (
                      <p className="text-sm text-accent-red py-4">
                        Something went wrong! Sorry for inconvenience. Try again
                        later.
                      </p>
                    ) : null}
                  </div>
                  <div className="bg-background-light px-4 pb-4 flex gap-4 place-content-end">
                    <OutlineButton onClick={onClose} type="button">
                      Close
                    </OutlineButton>
                    {!submitted ? (
                      <Button
                        className="w-full"
                        type="submit"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <Loader2 className="m-auto animate-spin" />
                        ) : (
                          "Join Waitlist"
                        )}
                      </Button>
                    ) : null}
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
