import React from "react";

const Card = () => {
	return (
		<div className="container-lg">
			<div className="row row-cols-1 row-cols-md-4 g-4">
				<div className="col">
					<div className="card">
						<img
							src="https://loremflickr.com/320/240"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Gatito</h5>
							<p className="card-text">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Facere, ullam quos, explicabo
								doloremque pariatur totam atque cum doloribus
								amet dicta hic nihil non, esse asperiores unde
								fugiat fuga sapiente iure.
							</p>
							<button type="button" class="btn btn-info">
								Click Me
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img
							src="https://loremflickr.com/320/240?random=5"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Gatito</h5>
							<p className="card-text">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Facere, ullam quos, explicabo
								doloremque pariatur totam atque cum doloribus
								amet dicta hic nihil non, esse asperiores unde
								fugiat fuga sapiente iure.
							</p>
							<button type="button" className="btn btn-info">
								Click Me
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img
							src="https://loremflickr.com/320/240?random=3"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Gatito</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cumque et quasi officia beatae
								consectetur laborum qui quisquam harum saepe
								laudantium fugit fugiat, ut recusandae omnis
								dolorem labore tempora a? Ipsa?
							</p>
							<button type="button" className="btn btn-info">
								Click Me
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img
							src="https://loremflickr.com/320/240?random=4"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Gatito</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odio aut eligendi pariatur
								nihil eius similique nam enim, obcaecati quasi,
								quod explicabo ratione assumenda nostrum,
								maiores animi voluptate deleniti velit
								exercitationem.
							</p>
							<button type="button" class="btn btn-info">
								Click Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
