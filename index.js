function toggleMenu() {
    // Finds the navigation menu
    const menu = document.getElementById('nav-menu');
    // Toggles the 'active' class on and off
    menu.classList.toggle('active');
}

//Reasearch


const researchData = {
    publications: [
        "J. Jaiswal, M.K. Gupta, and N.K. Tomar, <a href='https://www.sciencedirect.com/science/article/abs/pii/S0167691121000463' target='_blank' rel='noopener noreferrer' class='paper-link'>Necessary and sufficient conditions for ODE observer design of descriptor systems</a>, Systems & Control Letters, vol. 151, 2021, pp.104916.",
        "S. Kumar and N.K. Tomar, Mild solution and controllability of second order nonlocal retarded semilinear systems, IMA journal of Mathematical control and information, vol.37(1), 2020, pp. 39-49.",
        "R. Radhakrishnan, S. Bhaumik, and N.K. Tomar, Continuous-discrete filters for bearings-only underwater target tracking problems, Asian Journal of Control, vol. 21(4), 2019, pp. 1576-1586.",
        "A. Kundu, S. Kumar, and N.K. Tomar, Option Implied Risk-neutral Density Estimation: A Robust and Flexible Method, Computational Economics, vol. 54(2), 2019, pp. 705-728.",
        "R. Radhakrishnan, S. Bhaumik, and N.K. Tomar, Gaussian sum shifted Rayleigh filter for underwater bearings-only target tracking problems, IEEE Journal of Oceanic Engineering, vol. 44, 2019, pp. 492-501.",
        "Nutan Kumar Tomar",
        "M.K. Gupta, N.K. Tomar, and M. Darouach, Unknown inputs observer design for descriptor systems with monotone nonlinearities, International Journal of Robust and Non-linear Control, vol. 28, 2018, pp. 5481-5494.",
        "V.K. Mishra, N.K. Tomar, and M.K. Gupta, Regularization and index reduction for linear differential-algebraic systems, Computational and Applied Mathematics, vol. 37(4),2018, pp. 4587-4598.",
        "V.K. Mishra and N.K. Tomar, Alternate checking criteria for reachable controllability of rectangular descriptor systems, Kybernetika, vol. 53(5), 2017, pp. 820-837.",
        "M.K. Gupta, N.K. Tomar, V.K. Mishra, and S. Bhaumik, Observer design for semilinear descriptor systems with applications to chaos-based secure communication, International Journal of Applied and Computational Mathematics, vol. 3(1), 2017, pp. 1313-1324.",
        "V.K. Mishra, N.K. Tomar, and Mahendra Kumar Gupta Index reduction for rectangular descriptor systems via feedbacks, Cogent Engineering, vol. 4(1), 2017, pp. 1319786. Taylor & Francis Online. DOI: 10.1080/23311916.2017.1319786.",
        "S. Kumar and N.K. Tomar, Mild solution and constrained local controllability of semi-linear boundary control systems, Journal of Dynamical and Control Systems, vol. 23(4),2017, pp. 735-751.",
        "A. Kundu, S. Kumar, N.K. Tomar, and S. K. Gupta Call option price function in Bernstein polynomial basis with no-arbitrage inequality constraints, Journal of Inequalities and Applications, vol. 2016, 2016:153.",
        "R. Radhakrishnan, A. K. Singh, S. Bhaumik, and N.K. Tomar Multiple Sparse-grid Gauss-Hermite Filtering, Applied Mathematical Modelling, vol. 40(7-8), 2016, pp. 4441-4450.",
        "V.K. Mishra and N.K. Tomar, On Complete and Strong Controllability for Rectangular Descriptor Systems, Circuits, Systems, and Signal Processing, vol. 35(4), 2016, pp.1395-1406.",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik, On Detectability and Observer Design for Rectangular Linear Descriptor Systems, International Journal of Dynamics and Control,vol. 4(4), 2016, pp. 438-446.",
        "V.K. Mishra, N.K. Tomar, and Mahendra Kumar Gupta On Controllability and Normal-izability for Linear Descriptor Systems, Journal of Control, Automation and ElectricalSystems, vol. 27(1), 2016, pp. 19-28.",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik, Full- and reduced-order observer design for rectangular descriptor systems with unknown inputs, Journal of The Franklin Institute,vol. 352(3), 2015, pp. 1250-1264.",
        "M.K. Gupta and N.K. Tomar, PD Observer Design for Rectangular Linear Descriptor Systems, Bharatiya Vaigyanik evam Audyogik Anusandhan Patrika, vol 23(1), June 2015, pp. 48-53. (In Hindi, Publisher: CSIR - NISCAIR)",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik, Observer Design for Descriptor Systems with Lipschitz Nonlinearities: an LMI Approach, Nonlinear Dynamics and Systems Theory,vol. 14(3), 2014, pp. 291-301.",
        "N.K. Tomar and S. Kumar, On Controllability of Nonlocal Retarded Semilinear Distributed Control Systems Differential Equations and Dynamical Systems, vol. 21(3),2013, pp. 215-223.",
        "N.K. Tomar and J. Dabas, Controllability of impulsive fractional order semilinear evolution equations with nonlocal conditions Journal of Nonlinear Evolution Equation and Applications, vol. 2012(5), 2012, pp. 57-67.",
        "N.K. Tomar and S. Kumar, Approximate controllability of nonlocal semilinear time-varying delay control systems, Nonlinear Dynamics and Systems Theory, vol. 12(3),2012, pp. 303-310.",
        "N.K. Tomar, N. Sukavanam and K. P. Singh, Hybridization of Neural Nets and Genetic Algorithms to Compute the Boundary Control for Controlled Heat Equation, European Journal of Pure and Applied Mathematics, vol. 4(2), 2011, pp. 117-128.",
        "N.K. Tomar and N. Sukavanam, Exact Controllability of Semilinear Third Order Dispersion Equation, The Journal of Nonlinear Science and its Applications, vol 4(4), 2011,308-314.",
        "N.K. Tomar and N. Sukavanam, Approximate Controllability of Non-densely defined Semilinear Delayed Control Systems, Nonlinear Studies, vol 18(2), 2011, 229-234.",
        "N.K. Tomar and N. Sukavanam, Exact Controllability of Semilinear Thermoelastic System with Control Solely in Thermal Equation, Numerical Functional Analysis and Optimization, vol. 29(9-10), 2008, pp. 1171-1179.",
        "N. Sukavanam and N.K. Tomar, Approximate Controllability of semilinear delay control systems, Nonlinear Functional Analysis and Application, vol. 12(1), 2007, pp. 53-59."
    ],

    conferences: [
        "J. Jaiswal, M.K. Gupta, and N.K. Tomar. On Functional Observers for Descriptor Systems. In: Proceedings of American Control Conference 2021 (ACC 2021) (Accepted), IEEE, 2021.",
        "M.K. Gupta, N.K. Tomar, D. Sharma, and J. Jaiswal. PD observer design for Descriptor Systems with Unknown Inputs. In: Proceedings of 5th IEEE Conference on Recent Advances and Innovations in Engineering (ICRAIE 2020) (Accepted), IEEE, 2020.",
        "R. Radhakrishnan, S. Bhaumik, and N.K. Tomar. Continuous-Discrete Quadrature Filters for Intercepting a Ballistic Target on Reentry using Seeker Measurements. In: Proceedings of Third IFAC International Conference on Advances in Control and Optimization of Dynamical Systems (ACODS 2018), IFAC-PapersOnLine Journal, Elsevier, vol. 51(1), 2018, pp. 383-388.",
        "R. Radhakrishnan, S. Bhaumik, and N.K. Tomar. Continuous-discrete shifted Rayleigh filter for underwater passive bearings-only target tracking. In: Proceedings of the AsianControl Conference (ASCC-2017) IEEE, 2017. (Place of Conference: Gold Coast ConventionCentre, Australia during Dec 17 - 20, 2017). DOI: 10.1109/ASCC.2017.8287272",
        "S. Chandra, M.K. Gupta, and N.K. Tomar. Observer Design Approach to Synchronize Lorenz Chaotic Systems for Secure Communication. In: Proceedings of the International Conference on Computational Modellimg and Simulation, 2017. (Place of Conference:University of Colombo, Sri Lanka during May 17 - 19, 2017)",
        "R. Radhakrishnan, M. Saha, S. Bhaumik, and N.K. Tomar. Ballistic target tracking and its interception using suboptimal filters on reentry. In: Proceedings of the Sixth Inter-national Symposium on Embedded Computing and System Design (ISED-2016) IEEE,2016. (Place of Conference: Indian Institute of Technology, Patna Bihta, India duringDec 15 - 17, 2016) DOI:10.1109/ISED.2016.7977096",
        "V.K. Mishra and N.K. Tomar. Controllability Analysis of Linear Time Invariant Descriptor Systems. In: 4th International Conference on Advances in Control and Opti-mization of Dynamical Systems (ACODS 2016), IFAC-PapersOnLine Journal, Elsevier,vol. 49(1), 2016, pp. 532-536. (Place of Conference: NIT Tiruchirappalli, India duringFeb 01-05, 2016)",
        "V.K. Mishra, N.K. Tomar, and M.K. Gupta. Impulse Controllability and Impulse Elimination in Rectangular Descriptor Systems. In: 15th International Conference onControl, Automation and Systems (ICCAS 2015), IEEE, 2015. (Place of Conference:BEXCO (Busan Exhibition Convention Center), Busan, Korea during October 13-16,2015) DOI: 10.1109/ICCAS.2015.7364930",
        "S. Chandra, M.K. Gupta, and N.K. Tomar. Synchronization of Rossler Chaotic System for Secure Communication via Descriptor Observer Design Approach. In: International Conference on Signal Processing, Computing and Control (ISPCC 2015), IEEE, 2015.(Place of Conference: Jaypee University of Information Technology Waknaghat, Solan,India during Sep 24 - 26, 2015) DOI: 10.1109/ISPCC.2015.7375009",
        "R. Radhakrishnan, A.K. Singh, S. Bhaumik, and N.K. Tomar. Quadrature Filters for Underwater Passive Bearings-Only Target Tracking. In: Sensor Signal Processing for Defence (SSPD 2015), IEEE, 2015. (Place of Conference: The University of Edinburgh,Scotland, United Kingdom during Sep 09 - 10, 2015) DOI: 10.1109/SSPD.2015.7288519",
        "R. Radhakrishnan, A.K. Singh, S. Bhaumik, and N.K. Tomar. IMM-Cubature Quadrature Kalman Filter for Manoeuvring Target Tracking. In: International Conference on Signal Processing, Informatics, Communication and Energy Systems (SPICES 2015), IEEE, 2015, pp. 1-5. (Place of Conference: NIT Calicut, Kozhikode, India during Feb 19 - 21, 2015) DOI: 10.1109/SPICES.2015.7091498",
        "R. Radhakrishnan, S. Bhaumik, N.K. Tomar and A.K. Singh. Bearing only Tracking Using Sparse-grid Gauss-Hermite Filter. In: International Conference on Intelligent Computing and Applications (ICICA 2014), Series: Advances in Intelligent Systems and Computing, Vol. 343, Springer, 2015, pp. 349-356 (Chapter 37) (Eds: Mandal, D., Kar, R., Das, S., Panigrahi, B.K.). (Place of Conference: NIT Durgapur, India during Dec 22-24, 2014)",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik. PD observer design for linear descriptor systems. In: International Conference on Mathematical Sciences (ICMS-2014), Elsevier, 2014, pp. 40 - 43. (Place of Conference: Sathyabama University, Chennai, India during July 17-19, 2014)",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik. Detectability and observer design for linear descriptor systems. In: 22nd Mediterranean Conference on Control and Automation (MED 2014), IEEE, 2014, pp. 1094 - 1098. (Place of Conference: University of Palermo, Palermo, Italy during June 16 - 19, 2014) DOI: 10.1109/MED.2014.6961520",
        "M.K. Gupta, N.K. Tomar and S. Bhaumik. On Observability of Irregular Descriptor Systems. In: Advances in Control and Optimization of Dynamical Systems (ACODS 2014), IFAC, vol. 3(1), 2014, PP. 376-379. (Place of Conference: IIT Kanpur, Kanpur, India during March 13 - 15, 2014).",
        "N.K. Tomar and N. Sukavanam. Exact Controllability of Semilinear Thermoelastic System with Control and non-linearity in Thermal Component Only. In: ICIAM07, PAMM, vol. 7(1), 2008, pp. 2030039 - 2030040. (Place of Conference: ETH Zurich and University of Zurich, Switzerland during July 16 - 20, 2007)."
    ],

    workshops: [
        "Workshop on Scientific Computing, Indian Institute of Technology Patna, Aug 02-03, 2012.",
        "Tutorial Series on algorithms and mathematical techniques used in simulation and verification tools for Integrated Circuits, Indian Institute of Technology Patna, India, Aug-Sep, 2012.",
        "Workshop on Sobolev Spaces, Indian Institute of Technology Patna, February 16 - 23, 2017.",
        "GIAN course on Beyond the Kalman Filter: Bayesian Recursive Filtering in Engineering and Finance, Indian Institute of Technology Patna, January 1 - 5, 2018.",
        "National conference on Recent Trends in Differential Equation Theory, Modelling and Computation (NCDE - 2019), Indian Institute of Technology Patna, March 29-30, 2019.",
        "Program coordinator for National Mathematics Day 2020 events at IIT Patna. (Several lectures and competitions were organized during December 22 - 27, 2020.)",
        "Program co-coordinator for National Science Day 2021 celebration at IIT Patna on Feb 28, 2021."
    ]
};

// UI Controller to populate lists and switch tabs smoothly
function switchTab(category) {
    const listContainer = document.getElementById("research-list");
    if (!listContainer) return; // Prevent errors if executing script on home or profile page

    // Reset list HTML contents completely
    listContainer.innerHTML = "";

    // Generate inner list fragments cleanly
    researchData[category].forEach(itemText => {
        const li = document.createElement("li");
        li.innerHTML = itemText;
        listContainer.appendChild(li);
    });

    // Toggle styling states on tab buttons
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    // Set target button to active state natively matching event click parameters
    const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute("onclick").includes(category));
    if (clickedBtn) clickedBtn.classList.add("active");
}

// Initial invocation after resource rendering complete to default populate first tab view
document.addEventListener("DOMContentLoaded", () => {
    switchTab("publications");
});