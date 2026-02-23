console.log('connected');

// DATA
let allJobList = [
    {
        id: 1,
        title: "Mobile First Corp",
        profession: "React Native Developer",
        location: "Remote",
        time: "Full Time",
        salary: "$80,000 - $100,000",
        status: "Not Applied",
        description: "We are looking for a skilled React Native Developer to join our team. The ideal candidate will have experience in building mobile applications using React Native and a strong understanding of mobile development best practices.",
    },
    {
        id: 2,
        title: "Pixel Perfect UI",
        profession: "Frontend Engineer",
        location: "New York, NY",
        time: "Full Time",
        salary: "$110,000 - $140,000",
        status: "Not Applied",
        description: "Join our design-driven team to build stunning user interfaces. Proficiency in React, TypeScript, and Tailwind CSS is a must for this fast-paced role.",
    },
    {
        id: 3,
        title: "DataStream Systems",
        profession: "Backend Developer",
        location: "Austin, TX",
        time: "Full Time",
        salary: "$120,000 - $150,000",
        status: "Not Applied",
        description: "We need a Node.js expert to scale our microservices architecture. You will be responsible for designing high-performance APIs and managing PostgreSQL databases.",
    },
    {
        id: 4,
        title: "CloudScale Solutions",
        profession: "DevOps Engineer",
        location: "Remote",
        time: "Contract",
        salary: "$90 - $120 / hr",
        status: "Not Applied",
        description: "Help us automate our CI/CD pipelines and manage AWS infrastructure. Experience with Docker, Kubernetes, and Terraform is highly preferred.",
    },
    {
        id: 5,
        title: "Creative Pulse",
        profession: "UI/UX Designer",
        location: "London, UK",
        time: "Full Time",
        salary: "£55,000 - £75,000",
        status: "Not Applied",
        description: "We are seeking a visionary designer to lead our product aesthetic. You'll conduct user research and create high-fidelity prototypes in Figma.",
    },
    {
        id: 6,
        title: "CyberShield AI",
        profession: "Security Analyst",
        location: "Washington, D.C.",
        time: "Full Time",
        salary: "$100,000 - $130,000",
        status: "Not Applied",
        description: "Protect our clients' data by identifying vulnerabilities and implementing robust security protocols. Knowledge of SOC2 and penetration testing is key.",
    },
    {
        id: 7,
        title: "GreenTech Innovators",
        profession: "Full Stack Developer",
        location: "Berlin, DE",
        time: "Part Time",
        salary: "€40,000 - €50,000",
        status: "Not Applied",
        description: "Work on sustainable energy solutions using the MERN stack. We value clean code, unit testing, and a passion for environmental impact.",
    },
    {
        id: 8,
        title: "Swift Logic",
        profession: "iOS Developer",
        location: "San Francisco, CA",
        time: "Full Time",
        salary: "$140,000 - $170,000",
        status: "Not Applied",
        description: "Build the next generation of our consumer app using Swift and SwiftUI. You will collaborate closely with product managers to ship weekly updates.",
    },
];

let interviewJobList = [];
let rejectedJobList = [];


// GLOBAL VARS 
let currentTab = 'all';           // all, interview, rejected



// UPDATE DASHBOARD UI 
function updateDashboard() {
    document.querySelector('#total-count').textContent = allJobList.length;
    document.querySelector('#interview-count').textContent = interviewJobList.length;
    document.querySelector('#rejected-count').textContent = rejectedJobList.length;
}

// updateDashboard();



const jobCardContainer = document.querySelector('#job-card-container');
jobCardContainer.innerHTML = '';

function showJobs(tab) {
    jobCardContainer.innerHTML = '';
    if (tab === 'all') {
        if (allJobList.length === 0) {
            showEmptyCard();
            return;
        }
        allJobList.forEach(job => {
            // console.log(job.id);
            showJob(job);
        });
    }

    if (tab === 'interview') {
        if (interviewJobList.length === 0) {
            showEmptyCard();
            return;
        }
        interviewJobList.forEach(job => {
            showJob(job);
        });
    }

    if (tab === 'rejected') {
        if (rejectedJobList.length === 0) {
            showEmptyCard();
            return;
        }
        rejectedJobList.forEach(job => {
            showJob(job);
        });
    }
}


// showJobs(currentTab)


function showJob(job) {


    jobCardContainer.innerHTML = jobCardContainer.innerHTML + `
            <div data-job-id="${job.id}" class="relative bg-surface ${job.status === 'Interview' ? 'border-l-6 border-l-[var(--theme-green)]' : job.status === 'Rejected' ? 'border-l-6 border-l-[var(--theme-red)]' : 'border-l-6 border-l-[#ececec]'} border border-[#ececec] hover:border-[var(--theme-blue)] transition-all duration-300 ease-in-out rounded-[.5rem] px-[1rem] py-[2rem] tablet:px-[1.5rem] tablet:py-[1.5rem]">
                    <h3 class="text-theme-primary text-[1.125rem] font-[600] leading-none mb-[.25rem]">${job.title}</h3>
                    <p class="text-text-secondary text-[1rem] font-[500] mb-[1.25rem]">${job.profession}</p>
                    <button class="group absolute top-6 right-2 tablet:right-6 rounded-full border-2 border-[#ececec] w-8 h-8 text-text-secondary transition-all duration-300 hover:border-[#ef4444] cursor-pointer delete-job">
                        <i class="fa-regular fa-trash-can delete-job transition-all duration-300 group-hover:text-[#ef4444]"></i>
                    </button>
                    <ul class="list-disc flex flex-col tablet:flex-row gap-2 tablet:gap-6 text-text-secondary text-[.875rem] font-[400] mb-[1.25rem]">
                        <li class="ml-4 tablet:ml-0 tablet:list-none">${job.location}</li>
                        <li class="ml-4 sm:ml-0">${job.time}</li>
                        <li class="ml-4 sm:ml-0">${job.salary}</li>
                    </ul>
                    <button class="btn apply-status-btn mb-[1rem] tablet:mb-[.5rem] ${job.status === 'Interview' ? 'apply-status-interview' : job.status === 'Rejected' ? 'apply-status-rejected' : ''}">${job.status}</button>
                    <p class="text-text-primary text-[.875rem] font-[400] mb-[1.25rem]">${job.description}</p>
                    <div class="flex gap-2">
                        <button class="btn interview-action-btn">INTERVIEW</button>
                        <button class="btn rejected-action-btn">REJECTED</button>
                    </div>
                </div>`;
}

function showEmptyCard() {
    jobCardContainer.innerHTML = '';
    jobCardContainer.innerHTML = jobCardContainer.innerHTML + `
    <div
  class="bg-surface border border-[#ececec] rounded-[.5rem] h-[25rem] flex items-center justify-center"
>
  <div class="flex flex-col items-center">
    <div class="w-[6.25rem] h-[6.25rem] object-cover mb-[1.25rem]">
      <img src="./jobs.png" alt="job document" />
    </div>
    <h3
      class="text-theme-primary text-center text-[1.5rem] font-[600] leading-none mb-[.25rem]"
    >
      No jobs available
    </h3>
    <p class="text-text-secondary text-center text-[1rem] font-[400]">
      Check back soon for new job opportunities
    </p>
  </div>
</div>
    `;
}

// HANDLING TAB BUTTONS ACTION 
let tabParent = document.querySelector('#tab-btn-parent');

tabParent.addEventListener('click', (e) => {

    // e.target.closest('button').textContent.toLowerCase() === 'all' && showJobs('all');
    // console.log(e.target.closest('button').textContent.toLowerCase() === 'all');
    console.log(e.target);

    if (e.target.textContent.toLowerCase() === 'all') {
        currentTab = 'all';
        // update filter buttons
        document.querySelectorAll('#tab-btn-parent button').forEach(btn => {

            // making all neutral
            btn.classList.remove('active-filter-btn');
            btn.classList.add('neutral-filter-btn');
        });

        console.log(e.target.classList);

        // activating the clicked one
        e.target.classList.remove('neutral-filter-btn');
        e.target.classList.add('active-filter-btn');

        // show jobs accordingly
        showJobs(currentTab)
        showDisplayCount();
    }

    if (e.target.textContent.toLowerCase() === 'interview') {
        currentTab = 'interview';
        // update filter buttons
        document.querySelectorAll('#tab-btn-parent button').forEach(btn => {

            // making all neutral
            btn.classList.remove('active-filter-btn');
            btn.classList.add('neutral-filter-btn');
        });

        console.log(e.target.classList);

        // activating the clicked one
        e.target.classList.remove('neutral-filter-btn');
        e.target.classList.add('active-filter-btn');

        // show jobs accordingly
        showJobs(currentTab)
        showDisplayCount();
    }

    if (e.target.textContent.toLowerCase() === 'rejected') {
        currentTab = 'rejected';
        // update filter buttons
        document.querySelectorAll('#tab-btn-parent button').forEach(btn => {

            // making all neutral
            btn.classList.remove('active-filter-btn');
            btn.classList.add('neutral-filter-btn');
        });

        console.log(e.target.classList);

        // activating the clicked one
        e.target.classList.remove('neutral-filter-btn');
        e.target.classList.add('active-filter-btn');

        // show jobs accordingly
        showJobs(currentTab)
        showDisplayCount();
    }

});



function addListenerToJobCardContainer() {
    jobCardContainer.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(e.target.closest('.relative').dataset.jobId);

        if (e.target.textContent.toLowerCase() === 'interview') {
            console.log('interview btn clicked');
            const jobId = parseInt(e.target.closest('.relative').dataset.jobId);
            // console.log(typeof jobId);

            // checking if pushed already
            const jobExists = interviewJobList.find(job => job.id === jobId);
            if (!jobExists) {
                // finding the object
                const job = allJobList.find(job => job.id === jobId);
                // job.staus = 'Interview';

                // updating the status in allJobList
                for (let i = 0; i < allJobList.length; i++) {
                    if (allJobList[i].id === jobId) {
                        allJobList[i].status = 'Interview';
                        break;
                    }
                }

                interviewJobList.push(job);
                // showJobs(currentTab);

                rejectedJobList = rejectedJobList.filter(job => job.id !== jobId);

                updateUI();
            }
        }
        if (e.target.textContent.toLowerCase() === 'rejected') {
            console.log('rejected btn clicked');

            const jobId = parseInt(e.target.closest('.relative').dataset.jobId);

            // checking if pushed already
            const jobExists = rejectedJobList.find(job => job.id === jobId);
            if (!jobExists) {
                // finding the source object to update source
                const job = allJobList.find(job => job.id === jobId);
                // job.staus = 'Interview';

                // updating the status in allJobList
                for (let i = 0; i < allJobList.length; i++) {
                    if (allJobList[i].id === jobId) {
                        allJobList[i].status = 'Rejected';
                        break;
                    }
                }

                rejectedJobList.push(job);
                showJobs(currentTab);

                interviewJobList = interviewJobList.filter(job => job.id !== jobId);

                updateUI();
            }


        };

        if (e.target.classList.contains('delete-job')) {
            console.log('delete btn clicked');

            const jobId = parseInt(e.target.closest('.relative').dataset.jobId);

            if (currentTab === 'all') {
                rejectedJobList = rejectedJobList.filter(job => job.id !== jobId);
                interviewJobList = interviewJobList.filter(job => job.id !== jobId);
                allJobList = allJobList.filter(job => job.id !== jobId);
                updateUI();
            }

            if (currentTab === 'interview') {
                interviewJobList = interviewJobList.filter(job => job.id !== jobId);
                updateUI();
            }

            if (currentTab === 'rejected') {
                rejectedJobList = rejectedJobList.filter(job => job.id !== jobId);
                updateUI();
            }




        }

    })
};

addListenerToJobCardContainer();

function updateUI() {
    showJobs(currentTab);
    updateDashboard();
    showDisplayCount()
}

function showDisplayCount() {
    const displayCount = document.querySelector('#display-count');

    console.log(displayCount);


    // all, interview, rejected
    if (currentTab === 'all') {
        displayCount.textContent = allJobList.length + ' jobs';
        console.log('tab all');

    } else if (currentTab === 'interview') {
        displayCount.textContent = interviewJobList.length + ' of ' + allJobList.length + ' jobs';
        console.log('tab interview');
    } else if (currentTab === 'rejected') {
        displayCount.textContent = rejectedJobList.length + ' of ' + allJobList.length + ' jobs';
        console.log('tab rejected');
    }

}

updateUI();

















