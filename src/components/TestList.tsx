// src/components/TestList.tsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../style.css'

interface Test {
  brokee_id: number;
  category: string;
  difficulty: string;
  description_short: string;
  featured_image: string;
  name: string;
  roles: string;
  status: string;
  type: string;
  tech_stack: string;
}

const GET_TESTS = gql`
  query GetTests {
    tests(order_by: { name: asc }) {
      ...TestPartial
    }
  }

  fragment TestPartial on tests {
    brokee_id
    category
    difficulty
    description_short
    featured_image
    name
    roles
    status
    type
    tech_stack
  }
`;

const TestList: React.FC = () => {
  const { loading, error, data } = useQuery<{ tests: Test[] }>(GET_TESTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        return 'gray'; // Default color or any other color you prefer
    }
  };

  return (
    <div id="wrapper">
        <div className="offer-sec py-5">
            <div className="container">
            <div className="text-center mb-5">
                <h1 className="mb-3">Current Test Offerings</h1>
                <p className="dark-grey">
                Evaluate the practical skills of your candidates by checking if they
                can fix one of the following broken environments:
                </p>
            </div>
            <div className="row justify-content-center">
            {data && data.tests.map((test) => (
                <div className="col-md-6 col-lg-4 mb-4" key={test.brokee_id}>
                  <div className="card border-0 p-3 pb-5 position-relative h-100">
                    <div className="img-holder mb-3">
                      <img src={test.featured_image} className="img-fluid" alt={`Featured for ${test.name}`} />
                    </div>
                    <h2 className="text-center">{test.name}</h2>
                    <p className="text-center">{test.description_short}</p>
                    <p className="text-uppercase title">Tech stack</p>
                    <ul className="list-unstyled">
                      {test.tech_stack.split(',').map((tech, index) => (
                        <li key={index}>{tech.trim()}</li>
                      ))}
                    </ul>
                    <p className="text-uppercase title">Roles</p>
                    <ul className="list-unstyled green">
                      {test.roles.split(',').map((role, index) => (
                        <li key={index}>{role.trim()}</li>
                      ))}
                    </ul>
                    <p className="text-uppercase title">Difficulty</p>
                    <ul className="list-unstyled orange">
                      <li style={{ backgroundColor: getDifficultyColor(test.difficulty) }} className='text-capitalize'>{test.difficulty}</li>
                    </ul>
                    <div className="link text-center fw-bold">
                      <a className="text-decoration-none d-block" href="#">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>
        <div className="blog-page py-5">
          <div className="container">
            <div className="col-lg-10 col-xl-8 mx-auto">
              <h1 className="mb-3">
                Introducing Pricing Plans and Free Trial for DevOps Tests
              </h1>
              <span className="d-block mb-4 dark-grey">
                Last updated on Jan 17, 2024
              </span>
              <div className="img-holder mb-3">
                <img
                  src="https://blog.brokee.io/content/images/size/w960/2024/01/image--2-.png"
                  className="img-fluid rounded"
                />
              </div>
              <p className="mb-4">
                We're starting 2024 off with a bang! We are happy to announce our
                biggest product update yet: the release of payment plans with a free
                trial.
              </p>
              <p className="mb-4">To make this a reality, we:</p>
              <ul className="mb-4">
                <li>Developed payment plans and integrated our platform with Stripe</li>
                <li>Opened sign-ups to the public</li>
                <li>Developed free tests specifically for the free trial</li>
                <li>Added team management</li>
                <li>
                  Implemented a permissions system for various platform features based
                  on payment plans
                </li>
              </ul>
              <p className="mb-4">
                <strong>Let's start with the most exciting part - Free Tests!</strong>
              </p>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Free Trial for (Easy) DevOps Tests</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    To showcase our platform without asking potential customers for
                    credit card details, we designed several easy tests that can be
                    taken free of charge.
                  </p>
                  <p className="mb-4">
                    Simply sign up on Brokee with a company name, and get quick access
                    to a feature-limited free trial that allows new users to conduct 5
                    easy tests and manage 1 user, giving you a preview of our platform’s
                    capabilities.
                  </p>
                  <div className="img-holder mb-2">
                    <img
                      src="https://blog.brokee.io/content/images/size/w1000/2024/01/image-2.png"
                      className="img-fluid rounded"
                    />
                  </div>
                  <span className="d-block text-center dark-grey mb-3">
                    A Selection of our Free DevOps Tests
                  </span>
                  <p className="mb-4">
                    Once you get comfortable with the process, simply upgrade to any
                    paid plan to send tests to more users and have access to more
                    advanced tests.
                  </p>
                  <p className="mb-4">
                    What do we mean by advanced DevOps tests? We have environments where
                    candidates can work with live systems deployed to major cloud
                    providers and showcase their skills in real-time. We've found that{" "}
                    <a href="#">live DevOps tests</a> help avoid hiring risks more than
                    relying on professional certifications or resumes.
                  </p>
                </div>
              </div>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Pricing Plans for DevOps Tests</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    Our <a href="#">payment plans</a> are crafted with the understanding
                    that every hiring team has its own set of unique needs. Whether
                    you're a startup looking for flexibility or a large enterprise
                    seeking comprehensive solutions, our plans are designed to suit a
                    wide range of requirements.
                  </p>
                  <div className="img-holder">
                    <img
                      src="https://blog.brokee.io/content/images/size/w1000/2024/01/image.png"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Flexible System: Credits Rollover Each Month</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    At the core of our payment system is the <b>credit model</b>. Users
                    can choose between buying a certain amount of credits upfront or
                    opting for a monthly subscription that comes with 2 credits each
                    month.
                  </p>
                  <p className="mb-4">
                    Test credits indicate how many hiring candidates can take skills
                    assessments. Every time a candidate starts a test, 1 credit is
                    deducted from the company's balance.
                  </p>
                  <p className="mb-4">
                    Our Growth Plan has one amazing feature:{" "}
                    <b>credits accumulate month-to-month</b> if not used. So, no need to
                    stress about paying for a product and not using it. The hiring
                    process can be sporadic, so you can use rollover credits from less
                    active months to <a href="#">hire confidently</a>, without seeing a
                    spike in your billing.
                  </p>
                  <p className="mb-4">
                    <strong>
                      Read More:{" "}
                      <a href="#">
                        How Much Does Hiring DevOps Cost?: Hidden Costs of Your Hiring
                        Pipeline
                      </a>
                    </strong>
                  </p>
                  <p className="mb-4">
                    This system offers unparalleled flexibility – if you're on a Growth
                    Plan and go over your credit limit, candidates can still continue
                    taking skills assessments - you will be charged for the extra usage
                    at the end of the month based on a tiered pricing model (the more
                    tests that are used in a month, the cheaper they get).
                  </p>
                  <p className="mb-4">
                    Similarly, if you’re on an On-Demand Plan and run out of credits,
                    you may simply buy more as needed.
                  </p>
                  <div className="img-holder mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHNlbmR8ZW58MHx8fHwxNzA1NTE1MDczfDA&ixlib=rb-4.0.3&q=80&w=1000"
                      className="img-fluid rounded"
                    />
                  </div>
                  <span className="d-block text-center dark-grey">
                    Send as many invites as you'd like to candidates. You'll only get
                    charged if they take the test.
                  </span>
                </div>
              </div>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Unlimited Candidate Test Invites</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    We wanted to mirror the natural hiring process when designing our
                    payment plans. We've seen that when you're hiring engineers for a
                    specific role, you often invite many candidates for a technical
                    interview, but only some of them will show up.
                  </p>
                  <p className="mb-4">
                    With this idea in mind, <a href="#">Brokee</a> allows you to{" "}
                    <b>invite an unlimited number of candidates</b> to take a skills
                    assessment, even though not all of them will actually take a test.
                    This way, we charge customers based on the skills assessments that
                    were started by candidates, not based on the number of invitations
                    you send.
                  </p>
                </div>
              </div>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Add Multiple Admins for Team Management</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    When you're a small startup, one admin user might be enough for a
                    testing platform. However, for tech recruiting firms or large hiring
                    teams, you'll want to be able to provide access to multiple
                    teammates. This is why we added basic team management to our paid
                    plans to support bigger teams.
                  </p>
                  <p className="mb-4">
                    Right now, the only role is an admin user, but in the future, we'll
                    add more roles with different levels of access.
                  </p>
                  <div className="img-holder mb-2">
                    <img
                      src="https://blog.brokee.io/content/images/size/w1000/2024/01/image-4.png"
                      className="img-fluid rounded"
                    />
                  </div>
                  <span className="d-block text-center dark-grey">
                    Team Management Dashboard
                  </span>
                </div>
              </div>
              <div className="widget border shadow mb-5">
                <div className="header border-bottom py-3 px-4">
                  <h2 className="m-0">Ready to Try Our Free DevOps Testing?</h2>
                </div>
                <div className="text-body py-3 px-4">
                  <p className="mb-4">
                    We developed Brokee's payment plans with a deep understanding of the
                    unique challenges faced by tech hiring teams. We invite you to{" "}
                    <a href="#">sign up</a> for our free trial and experience firsthand
                    how our platform can{" "}
                    <a href="#">revolutionize your tech hiring process</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TestList;
