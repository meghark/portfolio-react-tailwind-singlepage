function Contact() {


    return (
    <section id="contactMe">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Contact Me</h3>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Contact Number</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">555.555.555</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">LinkedIn</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">LinkedIn Profile</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="mailto:megha.nambiar@gmail.com">megha.nambiar@gmail.com</a></dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Github Link</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="https://github.com/meghark" target="_blank">Github</a></dd>
            </div>                       
          </dl>
        </div>
      </div>

</section>
  );
}

export default Portfolio;