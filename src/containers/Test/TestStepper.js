import { useState } from 'react';
import { TestContainer } from '../../styles/index';
import Stepper from 'react-simple-stepper-component';
import TestInfo from './TestInfo';
import PartInfo from './PartInfo';

const TestStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [testInfo, setTestInfo] = useState({'title':'', 'time_dependency': false})
    const [partInfo, setPartInfo] = useState({'navigation_mode':'LINEAR', 'submission_mode': 'SIMULTANEOUS', 'title': ''})
    const [disabledNextBtn, setDisabledNextBtn] = useState(true);
    console.log(testInfo)
    const steps = [{ title: 'Test info'}, { title: 'Add part'}, { title: 'Add section'}, { title: 'Add questions' }]
    const onPrevious= () => {
        setCurrentStep(currentStep => currentStep > 0 ? currentStep - 1: 0)
        setDisabledNextBtn(false);
      }
    return (
        <TestContainer>
          <div style={{marginBottom: '30px'}}>
              <Stepper steps={steps} activeStep={ currentStep } />
              <button type="button" disabled={disabledNextBtn} onClick={ () => setCurrentStep(current => current + 1)} className="btn btn-primary position-absolute bottom-0 end-0">
                  Next
              </button>
              <button type="button" onClick={onPrevious} className="btn btn-primary position-absolute bottom-0 start-0">
                  Previous
              </button>
            </div>
            <div style={{position: 'relative'}}>
                {currentStep === 0 && <TestInfo setTestInfo={setTestInfo} testInfo={testInfo} setDisabledNextBtn={setDisabledNextBtn}/>}
                {currentStep === 1 && <PartInfo setPartInfo={setPartInfo} partInfo={partInfo} />}
            </div>
        </TestContainer>
    )

}




export default TestStepper;