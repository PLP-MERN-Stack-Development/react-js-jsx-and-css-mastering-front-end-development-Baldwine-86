function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;