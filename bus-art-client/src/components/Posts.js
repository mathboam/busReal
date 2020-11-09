import React from 'react';


const Posts = (props) => {
    const [open,setOpen] = React.useState(false)

    return(
        <div className="bg-white font-family-karla">

        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

                <nav>
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
                    </ul>
                </nav>

                <div className="flex items-center text-lg no-underline text-white pr-6">
                    <a className="" href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="pl-6" href="#">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </nav>

        <header className="w-full container mx-auto">
            <div className="flex flex-col items-center py-12">
                <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                    Minimal Blog
                </a>
                <p className="text-lg text-gray-600">
                    Lorem Ipsum Dolor Sit Amet
                </p>
            </div>
        </header>

        <nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
            <div className="block sm:hidden">
                <a
                    href="#"
                    className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                OnClick={() => setOpen(!open)}
            >
                Topics <i className={open ? 'fa-chevron-down': 'fa-chevron-up'} className="fas ml-2"></i>
        </a>
        </div>
    <div className={open ? 'block': 'hidden'} className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
    <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology </a>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
    </div>
</div>
</nav>


    <div className="container mx-auto flex flex-wrap py-6">

        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

            <article className="flex flex-col shadow my-4">
                <a href="#" className="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                    <p href="#" className="text-sm pb-8">
                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <h1 className="text-2xl font-bold pb-3">Introduction</h1>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                    <h1 className="text-2xl font-bold pb-3">Heading</h1>
                    <p className="pb-3">Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius.</p>
                    <p className="pb-3">Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque mauris elementum nec. Cras ante metus, mattis in malesuada in, fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna porttitor ex, sed consequat nisi tellus eget ante. Duis molestie mollis eros, eu sollicitudin mauris lobortis quis.</p>
                    <p className="pb-3">Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat volutpat.</p>
                    <h1 className="text-2xl font-bold pb-3">Conclusion</h1>
                    <p className="pb-3">Donec vulputate auctor leo lobortis congue. Sed elementum pharetra turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet, egestas tortor hendrerit, posuere diam. Proin laoreet, ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam dolor et nulla.</p>
                </div>
            </article>

            <div className="w-full flex pt-6">
                <a href="#" className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                    <p className="text-lg text-blue-800 font-bold flex items-center"><i className="fas fa-arrow-left pr-1"></i> Previous</p>
                    <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>
                <a href="#" className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                    <p className="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i className="fas fa-arrow-right pl-1"></i></p>
                    <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>
            </div>

            <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                    <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32" />
                </div>
                <div className="flex-1 flex flex-col justify-center md:justify-start">
                    <p className="font-semibold text-2xl">David</p>
                    <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
                    <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                        <a className="" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="pl-4" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="pl-4" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="pl-4" href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">About Us</p>
                <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Get to know us
                </a>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">Instagram</p>
                <div className="grid grid-cols-3 gap-3">
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
                                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
                                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
                                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
                                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
                                                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" />
                </div>
                <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                    <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                </a>
            </div>

        </aside>

    </div>
    </div>
    )
}

export default Posts;
