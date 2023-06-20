import { defineStore } from 'pinia'
import * as resumeJson from '../assets/resume.json'

export const resumeStore = defineStore('resume', {
    state: () => ({data: resumeJson})
})