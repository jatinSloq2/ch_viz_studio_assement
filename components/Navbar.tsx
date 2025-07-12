"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    {
      title: "Explore",
      description: "Explore Cycle with an interactive demo",
    },
    {
      title: "Slack app",
      description: "Manage feedback from Slack, weirdly fast",
    },
    {
      title: "API",
      description: "Build custom workflows",
    },
    {
      title: "Security",
      description: "Enterprise-level protection",
    },
    {
      title: "Integrations",
      description: "Connect & unify product information across tools",
    },
  ];

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">

        {/* Mobile: Hamburger left, logo right */}
        <div className="flex justify-between w-full items-center md:hidden">
          {/* Hamburger */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            {/* Your existing logo SVG */}
            <svg width="100%" height="31" viewBox="0 0 102 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 14.4912C36 12.5384 36.4131 10.813 37.2392 9.31501C38.0653 7.80809 39.2201 6.63109 40.7035 5.784C42.1959 4.928 43.9281 4.5 45.9001 4.5C47.6678 4.5 49.1957 4.83438 50.4837 5.50313C51.7718 6.16296 52.8821 7.10367 53.8148 8.32526L50.6836 10.8665C50.0707 10.064 49.3911 9.4666 48.6449 9.07426C47.8988 8.67301 47.0105 8.47239 45.98 8.47239C44.7986 8.47239 43.7904 8.73543 42.9554 9.26151C42.1204 9.77868 41.4808 10.492 41.0367 11.4015C40.5925 12.311 40.3704 13.3409 40.3704 14.4912C40.3704 15.6414 40.5925 16.6713 41.0367 17.5808C41.4808 18.4814 42.1204 19.1947 42.9554 19.7208C43.7904 20.2469 44.7986 20.5099 45.98 20.5099C47.0194 20.5099 47.9165 20.3182 48.6716 19.9348C49.4355 19.5425 50.1195 18.9495 50.7236 18.1559L53.8148 20.657C52.891 21.8875 51.7806 22.8327 50.4837 23.4926C49.1957 24.1524 47.6678 24.4823 45.9001 24.4823C43.9281 24.4823 42.1959 24.0588 40.7035 23.2117C39.2201 22.3557 38.0653 21.1742 37.2392 19.6673C36.4131 18.1604 36 16.435 36 14.4912Z" fill="black"></path>
              <path d="M80.9906 21.5532C80.3333 22.534 79.5027 23.2696 78.4989 23.7601C77.4952 24.2416 76.3715 24.4823 75.1278 24.4823C73.7154 24.4823 72.4674 24.1836 71.3837 23.5862C70.2999 22.9888 69.4516 22.1595 68.8387 21.0984C68.2258 20.0284 67.9193 18.7979 67.9193 17.4069C67.9193 16.007 68.2258 14.772 68.8387 13.702C69.4605 12.6231 70.3177 11.7805 71.4103 11.1741C72.5029 10.5589 73.7687 10.2513 75.2078 10.2513C76.4159 10.2513 77.5174 10.4965 78.5123 10.9869C79.5072 11.4773 80.3333 12.2129 80.9906 13.1938L77.9926 15.4943C77.6195 14.9414 77.2065 14.5313 76.7534 14.2638C76.3004 13.9874 75.7585 13.8492 75.1278 13.8492C74.1774 13.8492 73.4001 14.1702 72.7961 14.8122C72.2009 15.4542 71.9033 16.3146 71.9033 17.3935C71.9033 18.4635 72.2009 19.3151 72.7961 19.9482C73.3912 20.5813 74.1685 20.8978 75.1278 20.8978C76.3803 20.8978 77.3619 20.3717 78.0726 19.3195L80.9906 21.5532Z" fill="black"></path>
              <path d="M86.3337 4.7675V20.122C86.3337 20.4876 86.5203 20.6704 86.8934 20.6704H87.5063V24.2148H85.9207C84.7659 24.2148 83.882 23.9206 83.2691 23.3321C82.6651 22.7346 82.363 21.785 82.363 20.4832V4.7675H86.3337Z" fill="black"></path>
              <path d="M101.004 21.941C100.409 22.7792 99.6138 23.4123 98.6189 23.8403C97.6329 24.2683 96.5092 24.4823 95.2478 24.4823C93.8088 24.4823 92.5518 24.1836 91.477 23.5862C90.4021 22.9798 89.5671 22.1461 88.972 21.085C88.3857 20.015 88.0926 18.7845 88.0926 17.3935C88.0926 16.0025 88.3857 14.772 88.972 13.702C89.5583 12.6231 90.3799 11.7805 91.437 11.1741C92.503 10.5589 93.7377 10.2513 95.1412 10.2513C96.678 10.2513 97.9838 10.6035 99.0586 11.3079C100.133 12.0123 100.924 12.9976 101.43 14.2638C101.937 15.5299 102.105 17.0057 101.937 18.6909H92.1699C92.3209 19.4934 92.6673 20.122 93.2092 20.5768C93.7599 21.0315 94.4572 21.2589 95.3011 21.2589C95.9762 21.2589 96.5581 21.143 97.0466 20.9112C97.5352 20.6793 97.9527 20.3628 98.2991 19.9615L101.004 21.941ZM95.1412 13.4345C94.3329 13.4345 93.68 13.6485 93.1825 14.0765C92.6851 14.5045 92.3608 15.1109 92.2098 15.8955H98.0326C97.926 15.1198 97.624 14.5179 97.1266 14.0899C96.6291 13.653 95.9673 13.4345 95.1412 13.4345Z" fill="black"></path>
              <path d="M54.0594 10.458L59.6432 24.159L59.1919 25.1781C58.7125 26.2255 57.4999 26.9898 56.2591 26.9898L58.1203 30.5C60.038 30.4151 61.589 29.028 62.4632 26.6501L68.3854 10.458H64.0425L61.448 19.5166L58.4587 10.458H54.0594Z" fill="black"></path>
              <path className="cycle" d="M28 13.3448C27.9979 13.563 27.9825 13.7699 27.8599 14.0993C27.7136 14.5132 27.4881 14.892 27.1966 15.2153C26.9051 15.5385 26.5538 15.799 26.1624 15.9801C25.771 16.1624 25.3486 16.2632 24.9191 16.2756C24.4896 16.288 24.0621 16.2138 23.6614 16.0553C23.2607 15.8968 22.895 15.6579 22.585 15.3532C22.275 15.0485 22.0288 14.683 21.8588 14.2795C21.7713 14.0705 21.7146 13.8327 21.6796 13.5898C21.4664 9.53991 18.1135 6.32082 14.0077 6.32082C9.90193 6.32082 6.32454 9.75918 6.32454 13.9995C6.32454 18.2398 9.7639 21.6771 14.0067 21.6771C17.72 21.6771 20.8174 19.0448 21.5333 15.5457C21.8258 15.9493 22.1699 16.3137 22.5819 16.5937C22.8271 16.7594 23.0928 16.9221 23.3019 17.0055C23.8262 17.2124 24.3855 17.3102 24.9469 17.2937C25.5083 17.2773 26.0614 17.1455 26.5723 16.9077C26.6671 16.8634 26.7753 16.7986 26.8906 16.7203C27.2594 16.4712 27.6003 16.1768 27.8939 15.8432C26.9916 22.7035 21.1182 28 14.0067 28C6.27098 27.999 0 21.7307 0 13.9995C0 6.26832 6.27098 0 14.0077 0C21.7445 0 27.658 5.91728 28 13.3448Z" fill="black"></path>
            </svg>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex justify-between w-full items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            {/* Same Logo */}
            <svg width="100%" height="31" viewBox="0 0 102 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 14.4912C36 12.5384 36.4131 10.813 37.2392 9.31501C38.0653 7.80809 39.2201 6.63109 40.7035 5.784C42.1959 4.928 43.9281 4.5 45.9001 4.5C47.6678 4.5 49.1957 4.83438 50.4837 5.50313C51.7718 6.16296 52.8821 7.10367 53.8148 8.32526L50.6836 10.8665C50.0707 10.064 49.3911 9.4666 48.6449 9.07426C47.8988 8.67301 47.0105 8.47239 45.98 8.47239C44.7986 8.47239 43.7904 8.73543 42.9554 9.26151C42.1204 9.77868 41.4808 10.492 41.0367 11.4015C40.5925 12.311 40.3704 13.3409 40.3704 14.4912C40.3704 15.6414 40.5925 16.6713 41.0367 17.5808C41.4808 18.4814 42.1204 19.1947 42.9554 19.7208C43.7904 20.2469 44.7986 20.5099 45.98 20.5099C47.0194 20.5099 47.9165 20.3182 48.6716 19.9348C49.4355 19.5425 50.1195 18.9495 50.7236 18.1559L53.8148 20.657C52.891 21.8875 51.7806 22.8327 50.4837 23.4926C49.1957 24.1524 47.6678 24.4823 45.9001 24.4823C43.9281 24.4823 42.1959 24.0588 40.7035 23.2117C39.2201 22.3557 38.0653 21.1742 37.2392 19.6673C36.4131 18.1604 36 16.435 36 14.4912Z" fill="black"></path>
              <path d="M80.9906 21.5532C80.3333 22.534 79.5027 23.2696 78.4989 23.7601C77.4952 24.2416 76.3715 24.4823 75.1278 24.4823C73.7154 24.4823 72.4674 24.1836 71.3837 23.5862C70.2999 22.9888 69.4516 22.1595 68.8387 21.0984C68.2258 20.0284 67.9193 18.7979 67.9193 17.4069C67.9193 16.007 68.2258 14.772 68.8387 13.702C69.4605 12.6231 70.3177 11.7805 71.4103 11.1741C72.5029 10.5589 73.7687 10.2513 75.2078 10.2513C76.4159 10.2513 77.5174 10.4965 78.5123 10.9869C79.5072 11.4773 80.3333 12.2129 80.9906 13.1938L77.9926 15.4943C77.6195 14.9414 77.2065 14.5313 76.7534 14.2638C76.3004 13.9874 75.7585 13.8492 75.1278 13.8492C74.1774 13.8492 73.4001 14.1702 72.7961 14.8122C72.2009 15.4542 71.9033 16.3146 71.9033 17.3935C71.9033 18.4635 72.2009 19.3151 72.7961 19.9482C73.3912 20.5813 74.1685 20.8978 75.1278 20.8978C76.3803 20.8978 77.3619 20.3717 78.0726 19.3195L80.9906 21.5532Z" fill="black"></path>
              <path d="M86.3337 4.7675V20.122C86.3337 20.4876 86.5203 20.6704 86.8934 20.6704H87.5063V24.2148H85.9207C84.7659 24.2148 83.882 23.9206 83.2691 23.3321C82.6651 22.7346 82.363 21.785 82.363 20.4832V4.7675H86.3337Z" fill="black"></path>
              <path d="M101.004 21.941C100.409 22.7792 99.6138 23.4123 98.6189 23.8403C97.6329 24.2683 96.5092 24.4823 95.2478 24.4823C93.8088 24.4823 92.5518 24.1836 91.477 23.5862C90.4021 22.9798 89.5671 22.1461 88.972 21.085C88.3857 20.015 88.0926 18.7845 88.0926 17.3935C88.0926 16.0025 88.3857 14.772 88.972 13.702C89.5583 12.6231 90.3799 11.7805 91.437 11.1741C92.503 10.5589 93.7377 10.2513 95.1412 10.2513C96.678 10.2513 97.9838 10.6035 99.0586 11.3079C100.133 12.0123 100.924 12.9976 101.43 14.2638C101.937 15.5299 102.105 17.0057 101.937 18.6909H92.1699C92.3209 19.4934 92.6673 20.122 93.2092 20.5768C93.7599 21.0315 94.4572 21.2589 95.3011 21.2589C95.9762 21.2589 96.5581 21.143 97.0466 20.9112C97.5352 20.6793 97.9527 20.3628 98.2991 19.9615L101.004 21.941ZM95.1412 13.4345C94.3329 13.4345 93.68 13.6485 93.1825 14.0765C92.6851 14.5045 92.3608 15.1109 92.2098 15.8955H98.0326C97.926 15.1198 97.624 14.5179 97.1266 14.0899C96.6291 13.653 95.9673 13.4345 95.1412 13.4345Z" fill="black"></path>
              <path d="M54.0594 10.458L59.6432 24.159L59.1919 25.1781C58.7125 26.2255 57.4999 26.9898 56.2591 26.9898L58.1203 30.5C60.038 30.4151 61.589 29.028 62.4632 26.6501L68.3854 10.458H64.0425L61.448 19.5166L58.4587 10.458H54.0594Z" fill="black"></path>
              <path className="cycle" d="M28 13.3448C27.9979 13.563 27.9825 13.7699 27.8599 14.0993C27.7136 14.5132 27.4881 14.892 27.1966 15.2153C26.9051 15.5385 26.5538 15.799 26.1624 15.9801C25.771 16.1624 25.3486 16.2632 24.9191 16.2756C24.4896 16.288 24.0621 16.2138 23.6614 16.0553C23.2607 15.8968 22.895 15.6579 22.585 15.3532C22.275 15.0485 22.0288 14.683 21.8588 14.2795C21.7713 14.0705 21.7146 13.8327 21.6796 13.5898C21.4664 9.53991 18.1135 6.32082 14.0077 6.32082C9.90193 6.32082 6.32454 9.75918 6.32454 13.9995C6.32454 18.2398 9.7639 21.6771 14.0067 21.6771C17.72 21.6771 20.8174 19.0448 21.5333 15.5457C21.8258 15.9493 22.1699 16.3137 22.5819 16.5937C22.8271 16.7594 23.0928 16.9221 23.3019 17.0055C23.8262 17.2124 24.3855 17.3102 24.9469 17.2937C25.5083 17.2773 26.0614 17.1455 26.5723 16.9077C26.6671 16.8634 26.7753 16.7986 26.8906 16.7203C27.2594 16.4712 27.6003 16.1768 27.8939 15.8432C26.9916 22.7035 21.1182 28 14.0067 28C6.27098 27.999 0 21.7307 0 13.9995C0 6.26832 6.27098 0 14.0077 0C21.7445 0 27.658 5.91728 28 13.3448Z" fill="black"></path>
            </svg>
          </div>

          {/* Center: Nav Items */}
          <div className="flex items-center space-x-4 text-[18px] font-medium text-gray-800">
            {/* Product Dropdown */}
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <DropdownMenuTrigger asChild>
                  <button className="hover:text-black hover:bg-gray-300/10 p-2 rounded-xl flex items-center gap-1 transition focus:border-0">
                    Product <span>▾</span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mt-2 w-full md:w-[320px] p-2 space-y-1">
                  {items.map((item) => (
                    <DropdownMenuItem key={item.title} asChild className="p-0 hover:bg-transparent focus:bg-transparent">
                      <Link href="/" className="w-full px-3 py-2 rounded-md flex flex-col items-start text-left group">
                        <span className="text-[17px] font-medium text-black group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>

            <Link href="/" className="hover:text-black hover:bg-gray-300/10 p-2 rounded-xl">Changelog</Link>
            <Link href="/" className="hover:text-black hover:bg-gray-300/10 p-2 rounded-xl">Manifesto</Link>

            {/* Resources Dropdown */}
            <DropdownMenu open={open1} onOpenChange={setOpen1}>
              <div
                onMouseEnter={() => setOpen1(true)}
                onMouseLeave={() => setOpen1(false)}
              >
                <DropdownMenuTrigger asChild>
                  <button className="hover:text-black hover:bg-gray-300/10 p-2 rounded-xl flex items-center gap-1 transition focus:border-0">
                    Resources <span>▾</span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mt-2 w-full md:w-[320px] p-2 space-y-1">
                  {items.map((item) => (
                    <DropdownMenuItem key={item.title} asChild className="p-0 hover:bg-transparent focus:bg-transparent">
                      <Link href="/" className="w-full px-3 py-2 rounded-md flex flex-col items-start text-left group">
                        <span className="text-[17px] font-medium text-black group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
          </div>

          {/* Right: Log in + CTA */}
          <div className="flex items-center text-[18px]">
            <Link href="/" className="font-medium text-gray-800 hover:bg-gray-300/10 p-2 rounded-xl">Log in</Link>
            <Button className="rounded-xl px-4 py-6 text-[18px] font-semibold">Get started</Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t z-40 px-6 py-4 space-y-4 transition-all duration-300">
          <Link href="/" className="block text-lg font-medium text-gray-800">Product</Link>
          <Link href="/" className="block text-lg font-medium text-gray-800">Changelog</Link>
          <Link href="/" className="block text-lg font-medium text-gray-800">Manifesto</Link>
          <Link href="/" className="block text-lg font-medium text-gray-800">Resources</Link>
          <div className="pt-4 border-t mt-4">
            <Link href="/" className="block text-gray-700 mb-2">Log in</Link>
            <Button className="w-full">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}



