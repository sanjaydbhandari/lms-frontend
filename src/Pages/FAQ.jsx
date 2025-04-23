
const FAQ = () => {
  return (
    <div className="w-full px-4 py-10 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <button className="btn btn-outline btn-warning ">View all</button>
          </div>

          <div className="space-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                What is the refund policy?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a refund within the first 7 days of purchase if the
                  course hasn't been accessed significantly.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                I need to purchase a course. Whom should I contact?
              </div>
              <div className="collapse-content">
                <p>
                  You can reach out to our support team or drop a query through
                  the contact form on our website.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                I am not able to view my enrolled course. What to do/whom to
                contact?
              </div>
              <div className="collapse-content">
                <p>
                  Please check your login credentials or contact support if the
                  issue persists.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                What is an experience portal? How to use it?
              </div>
              <div className="collapse-content">
                <p>
                  The experience portal provides hands-on projects and learning
                  paths. You can access it from your dashboard.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                How to get Placements and Job assistance?
              </div>
              <div className="collapse-content">
                <p>
                  We offer dedicated placement support, resume building
                  sessions, and interview preparation for our learners.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FAQ
