import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created successfully',
      data: result,
    });

    // res.status(200).json({
    //   success: true,
    //   message: 'Academic semester is  created successfully ',
    //   data: result,
    // });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
