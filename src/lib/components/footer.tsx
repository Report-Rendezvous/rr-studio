import { siteConfig } from '@/lib/config/siteConfig'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-700">
      <div className="container w-full">
        <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Report Rendezvous STUDIO
            </h2>
            <span>Empower Report with Data</span>
          </div>
          <nav>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  What is RR STUDIO
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {siteConfig.footerNaviLegalItems.map((item, index) => (
                <li className="mb-4" key={`item-${index}`}>
                  <Link href={item.href} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between sm:text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            ©2024 developed by{' '}
            <Link
              href="https://github.com/tkitsunai"
              className="hover:underline"
            >
              tkits
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
