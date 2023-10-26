function ImageLinkForm({ onChange }) {
  console.log(onChange);

  function handleInputChange(e) {
    onChange(e);
  }
  function handleSubmit() {
    console.log("click");
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="mb-4 text-center text-lg">
        Faceify will detect faces in your pictures. Give it a try ✌️
      </p>
      <input
        type="text"
        placeholder="Image URL"
        className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
        onChange={handleInputChange}
      />
      <button
        className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        onClick={handleSubmit}
      >
        Detect
      </button>
    </div>
  );
}

export default ImageLinkForm;
