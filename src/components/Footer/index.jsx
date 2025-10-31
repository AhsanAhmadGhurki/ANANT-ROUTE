export default function Footer() {
  return (
    <div className="bg-gray-100">
      <footer className="flex flex-col sm:flex-col md:flex-row md:justify-between items-center container mx-auto text-center py-3 px-4 text-xs sm:text-sm text-gray-500 gap-2 md:gap-0">
        <div>
          Copyright © 2025 AntsGoMarching. All Rights
          Reserved
        </div>
        <div className="flex items-center gap-4">
          <div className="border-r border-gray-300 pr-4">
            Privacy & cookie policy
          </div>
          <div>Terms and conditions</div>
        </div>
      </footer>
    </div>
  );
}
