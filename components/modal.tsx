import Link from "next/link"

type Modal = {
  children: React.ReactNode | React.ReactNode[]
  title: string
}

export default function Modal({ children, title }: Modal) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Link
        href="/about"
        className="fixed inset-0 bg-[#111010] bg-opacity-75 transition-opacity"
        scroll={false}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
              <div className="bg-neutral-800 ">
                <div className="transition-all px-4 py-4 border-b border-[#404040] items-center hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    width={25}
                    height={25}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="absolute"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <h3
                    className="font-semibold text-center w-full my-0 leading-6 text-gray-900 dark:text-zinc-200"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                </div>
                <div className="mt-3 lg:px-6 pb-4 pt-4 sm:p-4 sm:pb-4 text-center sm:mt-0 sm:text-left">
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
