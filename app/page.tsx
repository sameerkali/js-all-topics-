"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Concept {
  id: string
  name: string
  category: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  interviewFrequency: "Low" | "Medium" | "High"
  dailyUse: "Low" | "Medium" | "High"
  optimization: boolean
}

const concepts: Concept[] = [
  // Core Language Fundamentals
  {
    id: "1",
    name: "Primitive Types",
    category: "Data Types & Variables",
    description: "String, Number, BigInt, Boolean, Undefined, Null, Symbol",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "2",
    name: "Value vs Reference Types",
    category: "Data Types & Variables",
    description: "Storage and assignment differences",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "3",
    name: "var, let, const",
    category: "Data Types & Variables",
    description: "Variable declarations and scoping differences",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "4",
    name: "typeof operator",
    category: "Data Types & Variables",
    description: "Type checking usage",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: false,
  },
  {
    id: "5",
    name: "Type Coercion",
    category: "Data Types & Variables",
    description: "Implicit and explicit type conversion",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: false,
  },

  // Operators
  {
    id: "6",
    name: "== vs ===",
    category: "Operators & Comparisons",
    description: "Equality operators differences",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "7",
    name: "Bitwise Operators",
    category: "Operators & Comparisons",
    description: "Binary operations and practical uses",
    difficulty: "Advanced",
    interviewFrequency: "Low",
    dailyUse: "Low",
    optimization: true,
  },
  {
    id: "8",
    name: "Logical Operators",
    category: "Operators & Comparisons",
    description: "AND, OR, NOT operations",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: false,
  },

  // Functions
  {
    id: "9",
    name: "Function Declarations vs Expressions",
    category: "Functions & Scope",
    description: "Hoisting behavior differences",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "10",
    name: "IIFE",
    category: "Functions & Scope",
    description: "Immediately Invoked Function Expressions",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: false,
  },
  {
    id: "11",
    name: "Higher-Order Functions",
    category: "Functions & Scope",
    description: "Functions accepting or returning other functions",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "12",
    name: "Pure Functions",
    category: "Functions & Scope",
    description: "Functions without side effects",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: true,
  },
  {
    id: "13",
    name: "Arrow Functions",
    category: "Functions & Scope",
    description: "ES6 concise function syntax",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },

  // Scope & Context
  {
    id: "14",
    name: "Closures",
    category: "Functions & Scope",
    description: "Inner functions accessing outer variables",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "15",
    name: "Hoisting",
    category: "Functions & Scope",
    description: "Variable and function declaration behavior",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: false,
  },
  {
    id: "16",
    name: "this Keyword",
    category: "Functions & Scope",
    description: "Context binding and behavior",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "17",
    name: "call, apply, bind",
    category: "Functions & Scope",
    description: "Context manipulation methods",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: false,
  },

  // Objects & Prototypes
  {
    id: "18",
    name: "Object Creation",
    category: "Objects & Prototypes",
    description: "Literal syntax and constructor patterns",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "19",
    name: "Object.create()",
    category: "Objects & Prototypes",
    description: "Creating objects with specific prototypes",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: false,
  },
  {
    id: "20",
    name: "Object Destructuring",
    category: "Objects & Prototypes",
    description: "Extracting properties into variables",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "21",
    name: "Prototype Inheritance",
    category: "Objects & Prototypes",
    description: "JavaScript's inheritance model",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: false,
  },
  {
    id: "22",
    name: "Prototype Chain",
    category: "Objects & Prototypes",
    description: "How property lookup works",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: true,
  },

  // Arrays & Functional Programming
  {
    id: "23",
    name: "map()",
    category: "Arrays & Functional Programming",
    description: "Transform array elements",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "24",
    name: "filter()",
    category: "Arrays & Functional Programming",
    description: "Select array elements based on condition",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "25",
    name: "reduce()",
    category: "Arrays & Functional Programming",
    description: "Accumulate array values into single result",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "26",
    name: "forEach()",
    category: "Arrays & Functional Programming",
    description: "Iterate through array elements",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "27",
    name: "Spread Operator (...)",
    category: "Arrays & Functional Programming",
    description: "Expanding arrays",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },

  // Asynchronous Programming
  {
    id: "28",
    name: "Event Loop",
    category: "Asynchronous Programming",
    description: "Asynchronous execution mechanism",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "Medium",
    optimization: true,
  },
  {
    id: "29",
    name: "Promises",
    category: "Asynchronous Programming",
    description: "Handling asynchronous operations",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "30",
    name: "async/await",
    category: "Asynchronous Programming",
    description: "Synchronous-looking async code",
    difficulty: "Intermediate",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "31",
    name: "Promise.all()",
    category: "Asynchronous Programming",
    description: "Concurrent promise execution",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: true,
  },

  // ES6+ Modern Features
  {
    id: "32",
    name: "Template Literals",
    category: "ES6+ Modern Features",
    description: "String interpolation and multiline strings",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "33",
    name: "Optional Chaining (?.)",
    category: "ES6+ Modern Features",
    description: "Safe property access",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "34",
    name: "Nullish Coalescing (??)",
    category: "ES6+ Modern Features",
    description: "Default values for null/undefined",
    difficulty: "Beginner",
    interviewFrequency: "Medium",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "35",
    name: "ES6 Modules",
    category: "ES6+ Modern Features",
    description: "import/export syntax",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },

  // Advanced Concepts
  {
    id: "36",
    name: "Currying",
    category: "Advanced Concepts",
    description: "Function transformation technique",
    difficulty: "Advanced",
    interviewFrequency: "Medium",
    dailyUse: "Low",
    optimization: true,
  },
  {
    id: "37",
    name: "Function Composition",
    category: "Advanced Concepts",
    description: "Combining multiple functions",
    difficulty: "Advanced",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: true,
  },
  {
    id: "38",
    name: "Generators",
    category: "Advanced Concepts",
    description: "Function* and yield syntax",
    difficulty: "Advanced",
    interviewFrequency: "Low",
    dailyUse: "Low",
    optimization: true,
  },
  {
    id: "39",
    name: "Map, Set, WeakMap, WeakSet",
    category: "Advanced Concepts",
    description: "Advanced data structures",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: true,
  },

  // DOM & Browser APIs
  {
    id: "40",
    name: "DOM Manipulation",
    category: "DOM & Browser APIs",
    description: "Element selection and modification",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "41",
    name: "Event Handling",
    category: "DOM & Browser APIs",
    description: "User interaction processing",
    difficulty: "Beginner",
    interviewFrequency: "High",
    dailyUse: "High",
    optimization: false,
  },
  {
    id: "42",
    name: "Event Propagation",
    category: "DOM & Browser APIs",
    description: "Bubbling and capturing",
    difficulty: "Intermediate",
    interviewFrequency: "Medium",
    dailyUse: "Medium",
    optimization: false,
  },

  // Performance & Optimization
  {
    id: "43",
    name: "Big O Notation",
    category: "Performance & Optimization",
    description: "Time and space complexity",
    difficulty: "Advanced",
    interviewFrequency: "High",
    dailyUse: "Low",
    optimization: true,
  },
  {
    id: "44",
    name: "Memory Management",
    category: "Performance & Optimization",
    description: "Heap and garbage collection",
    difficulty: "Advanced",
    interviewFrequency: "Medium",
    dailyUse: "Low",
    optimization: true,
  },
  {
    id: "45",
    name: "requestAnimationFrame",
    category: "Performance & Optimization",
    description: "Animation optimization",
    difficulty: "Intermediate",
    interviewFrequency: "Low",
    dailyUse: "Medium",
    optimization: true,
  },
]

export default function JavaScriptConceptsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [interviewFilter, setInterviewFilter] = useState("all")
  const [dailyUseFilter, setDailyUseFilter] = useState("all")
  const [optimizationFilter, setOptimizationFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const categories = [...new Set(concepts.map((c) => c.category))]

  const filteredAndSortedConcepts = useMemo(() => {
    const filtered = concepts.filter((concept) => {
      const matchesSearch =
        concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || concept.category === categoryFilter
      const matchesDifficulty = difficultyFilter === "all" || concept.difficulty === difficultyFilter
      const matchesInterview = interviewFilter === "all" || concept.interviewFrequency === interviewFilter
      const matchesDailyUse = dailyUseFilter === "all" || concept.dailyUse === dailyUseFilter
      const matchesOptimization =
        optimizationFilter === "all" ||
        (optimizationFilter === "yes" && concept.optimization) ||
        (optimizationFilter === "no" && !concept.optimization)

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesInterview &&
        matchesDailyUse &&
        matchesOptimization
      )
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "difficulty":
          const difficultyOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 }
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        case "interview":
          const interviewOrder = { Low: 1, Medium: 2, High: 3 }
          return interviewOrder[b.interviewFrequency] - interviewOrder[a.interviewFrequency]
        case "dailyUse":
          const dailyOrder = { Low: 1, Medium: 2, High: 3 }
          return dailyOrder[b.dailyUse] - dailyOrder[a.dailyUse]
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, categoryFilter, difficultyFilter, interviewFilter, dailyUseFilter, optimizationFilter, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setDifficultyFilter("all")
    setInterviewFilter("all")
    setDailyUseFilter("all")
    setOptimizationFilter("all")
    setSortBy("name")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">JavaScript Concepts Reference</CardTitle>
          <p className="text-center text-muted-foreground">
            Comprehensive guide to JavaScript concepts with filtering and sorting
          </p>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <Input
                placeholder="Search concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                  <SelectItem value="interview">Interview Frequency</SelectItem>
                  <SelectItem value="dailyUse">Daily Use</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Interview Frequency</label>
              <Select value={interviewFilter} onValueChange={setInterviewFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Daily Use</label>
              <Select value={dailyUseFilter} onValueChange={setDailyUseFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Optimization</label>
              <Select value={optimizationFilter} onValueChange={setOptimizationFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="yes">Must for Optimization</SelectItem>
                  <SelectItem value="no">Not for Optimization</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredAndSortedConcepts.length} of {concepts.length} concepts
            </p>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Concept</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Interview</TableHead>
                  <TableHead>Daily Use</TableHead>
                  <TableHead>Optimization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedConcepts.map((concept) => (
                  <TableRow key={concept.id}>
                    <TableCell className="font-medium">{concept.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{concept.category}</TableCell>
                    <TableCell className="text-sm">{concept.description}</TableCell>
                    <TableCell>
                      <Badge className={getDifficultyColor(concept.difficulty)}>{concept.difficulty}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getFrequencyColor(concept.interviewFrequency)}>
                        {concept.interviewFrequency}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getFrequencyColor(concept.dailyUse)}>{concept.dailyUse}</Badge>
                    </TableCell>
                    <TableCell>
                      {concept.optimization ? (
                        <Badge className="bg-blue-100 text-blue-800">Yes</Badge>
                      ) : (
                        <Badge variant="secondary">No</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
