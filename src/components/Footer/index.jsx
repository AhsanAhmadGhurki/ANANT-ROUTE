export default function Footer() {
  return (
    <div className="bg-gray-100">
      <footer className="flex justify-between container mx-auto text-center py-3 text-sm text-gray-500">
        <div>
          Copyright ©  AntsGoMarching. All Rights
          Reserved
        </div>
        <div className="flex gap-4">
          <div className="border-r border-gray-300 pr-4">
            Privacy & cookie policy
          </div>
          <div>Terms and conditions</div>
        </div>
      </footer>
    </div>
  );
}
