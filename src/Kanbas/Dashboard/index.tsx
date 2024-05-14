export default function Dashboard() {
return (
	<div id="wd-dashboard">
	   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
	   <h2 id="wd-dashboard-published">Published Courses (6)</h2> <hr />
	   
	   <div id="wd-dashboard-courses">
	      <div className="wd-dashboard-course">
	         <img src="/images/dash1.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               CS5001 Introduction to Python
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               Start understanding python
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>

	      <div className="wd-dashboard-course">
	         <img src="/images/dash2.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               CS5004 OOD Design
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               Object Oriented Design Using Java
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>

	      <div className="wd-dashboard-course">
	         <img src="/images/dash3.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               CS5610 React JS
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               Full Stack software developer
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>

	      <div className="wd-dashboard-course">
	         <img src="/images/dash4.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               DS4500 Understanding Technology
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               Understanding Today's most important Tech Trends
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>

	      <div className="wd-dashboard-course">
	         <img src="/images/dash5.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               CS1000 Industry Requirement
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               What skills are the most wanted in industry
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>

	      <div className="wd-dashboard-course">
	         <img src="/images/dash6.jpg" width={200} />
	         <div>
	            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
	               CS2000 CO-OP
	            </a>
	            <p className="wd-dashboard-course-title"> 
	               Given Experience on Co op
	            </p>
	            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
	         </div>	      
	      </div>
	     
	   </div>
	</div>
	);
}