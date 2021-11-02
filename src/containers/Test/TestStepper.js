import { useState } from 'react';
import { TestContainer } from '../../styles/index';
import Stepper from 'react-simple-stepper-component';
import TestInfo from './TestInfo';
import PartInfo from './PartInfo';

const TestStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [testInfo, setTestInfo] = useState({'title':'', 'time_dependency': false})
    const [partInfo, setPartInfo] = useState({'navigation_mode':'', 'submission_mode': '', 'title': ''})
    console.log(testInfo)
    const steps = [{ title: 'Test info'}, { title: 'Add part'}, { title: 'Add section'}, { title: 'Add questions' }]
    const onPrevious= () => {
        setCurrentStep(currentStep => currentStep > 0 ? currentStep - 1: 0)
      }
    return (
        <TestContainer>
          <div style={{marginBottom: '30px'}}>
              <Stepper steps={steps} activeStep={ currentStep } />
              <button type="button" onClick={ () => setCurrentStep(current => current + 1)} className="btn btn-primary position-absolute bottom-0 end-0">
                  Next
              </button>
              <button type="button" onClick={onPrevious} className="btn btn-primary position-absolute bottom-0 start-0">
                  Previous
              </button>
            </div>
            {currentStep === 0 && <TestInfo setTestInfo={setTestInfo} testInfo={testInfo} />}
            {currentStep === 1 && <PartInfo setPartInfo={setPartInfo} partInfo={partInfo} />}
        </TestContainer>
    )

}




export default TestStepper;