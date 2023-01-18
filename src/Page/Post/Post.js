import React from "react";
import postUserImg from "../../Assets/postUser.png";

const Post = () => {
  return (
    <section>
      <div class="py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-4 lg:gap-8">
            <div>
              <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div class="px-8 py-4 rounded-lg bg-gray-800/95">
              <p class="text-green-500 text-lg font-bold text-center md:text-left space-x-2 py-5">
                <img
                  src={postUserImg}
                  alt=""
                  className="h-5 w-5 inline-block"
                />
                <span>@noricarbonremoval.lens</span>
              </p>

              <p class="text-gray-50 sm:text-lg mb-6 md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is or otherwise generated. It may be used to
                display a sample of fonts or generate text for testing. Filler
                text is dummy text which has no meaning however looks very
                similar to real text.
              </p>

              <h2 class="text-gray-400 text-xl font-semibold text-center md:text-left mb-2 md:mb-4">
                Comments
              </h2>
              <div className="overflow-y-auto h-56">
                <div className="flex gap-3 py-4 border-b border-gray-600">
                  <img
                    src="https://lens.infura-ipfs.io/ipfs/bafybeie6hlqn3lrvuvgbqgt2d64hrd5ghlxveynqh3wdg3imclie3t2j5m"
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <p className="text-green-500 font-bold">@fairxyz.lens</p>
                    <p className="text-gray-50">Nice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
