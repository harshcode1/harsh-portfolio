import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Trophy, Target } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "Python", level: 80, color: "from-blue-500 to-green-500" },
        { name: "C", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "SQL", level: 85, color: "from-blue-600 to-purple-600" },
        { name: "HTML/CSS", level: 90, color: "from-pink-500 to-red-500" }
      ]
    },
    {
      id: 2,
      title: "Web Technologies",
      icon: <Target className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 90, color: "from-blue-400 to-cyan-400" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "Spring Boot", level: 88, color: "from-green-500 to-emerald-500" },
        { name: "Node.js", level: 80, color: "from-green-600 to-lime-600" },
        { name: "Express.js", level: 75, color: "from-gray-600 to-gray-800" }
      ]
    },
    {
      id: 3,
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
        { name: "MySQL", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Hibernate", level: 80, color: "from-orange-500 to-red-600" }
      ]
    },
    {
      id: 4,
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "Jenkins", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Maven", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "SonarQube", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "IntelliJ IDEA", level: 85, color: "from-red-500 to-pink-500" },
        { name: "Postman", level: 85, color: "from-orange-400 to-red-400" }
      ]
    }
  ]

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Specialist on CodeForces",
      description: "Achieved Specialist rank demonstrating strong algorithmic skills"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "500+ DSA Problems",
      description: "Solved across LeetCode, CodeForces, and HackerRank"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "AWS Certified",
      description: "Cloud Developing & Cloud Foundations certifications"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and achievements 
            in software development and competitive programming.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Database Management Systems",
              "Computer Networks",
              "Operating Systems",
              "Machine Learning",
              "Distributed Systems",
              "Software Engineering"
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/10 rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white/90 font-medium text-sm">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

